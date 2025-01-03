"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Edit2 } from "lucide-react";
import { useState } from "react";
import { editSchoolInformation } from "./actions";

type SchoolEditDialogProps = {
  item: string;
  data: string;
  isTextArea?: boolean;
  className?: string;
};

export const SchoolEditDialog = ({
  item,
  data,
  isTextArea,
  className,
}: SchoolEditDialogProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editedData, setEditedData] = useState(data);

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editSchoolInformation(item, editedData);
    setDialogOpen(false);
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={() => setDialogOpen(!dialogOpen)}>
      <DialogTrigger asChild>
        <Button
          className={cn(
            "absolute right-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer text-gray-500",
            className
          )}
          variant="ghost"
          size="icon"
        >
          <Edit2 />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit {item} </DialogTitle>
        </DialogHeader>
        <form action="#" onSubmit={handleSubmitForm}>
          <div className="py-4">
            {isTextArea ? (
              <Textarea
                id={item}
                defaultValue={data}
                value={editedData}
                onChange={(e) => setEditedData(e.target.value)}
              />
            ) : (
              <Input
                id={item}
                defaultValue={data}
                value={editedData}
                onChange={(e) => setEditedData(e.target.value)}
              />
            )}
          </div>
          <DialogFooter className="flex flex-row justify-between gap-3">
            <Button onClick={() => setDialogOpen(false)} variant={"secondary"}>
              Cancel
            </Button>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

type ContactInfoDialogProps = {
  data: {
    [key: string]: string;
  };
  className?: string;
};

export const ContactInfoDialog = ({
  data,
  className,
}: ContactInfoDialogProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const { address, phone, website, email } = data;

  const [editedAddress, setEditedAddress] = useState(address);
  const [editedPhone, setEditedPhone] = useState(phone);
  const [editedWebsite, setEditedWebsite] = useState(website);
  const [editedEmail, setEditedEmail] = useState(email);

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    editSchoolInformation("address", editedAddress);
    editSchoolInformation("phone", editedPhone);
    editSchoolInformation("website", editedWebsite);
    editSchoolInformation("email", editedEmail);

    setDialogOpen(false);
  };
  return (
    <Dialog open={dialogOpen} onOpenChange={() => setDialogOpen(!dialogOpen)}>
      <DialogTrigger asChild>
        <Button
          className={cn(
            "absolute right-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer text-gray-500",
            className
          )}
          variant="ghost"
          size="icon"
        >
          <Edit2 />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Contact Info </DialogTitle>
        </DialogHeader>
        <form action="#" onSubmit={handleSubmitForm}>
          <div className="py-1">
            <Label htmlFor="address" className="capitalize">
              Address
            </Label>
            <Input
              id="address"
              defaultValue={address}
              value={editedAddress}
              onChange={(e) => setEditedAddress(e.target.value)}
            />
          </div>
          <div className="py-1">
            <Label htmlFor="phone" className="capitalize">
              phone
            </Label>
            <Input
              id="phone"
              defaultValue={phone}
              value={editedPhone}
              onChange={(e) => setEditedPhone(e.target.value)}
            />
          </div>
          <div className="py-1">
            <Label htmlFor="website" className="capitalize">
              website
            </Label>
            <Input
              id="website"
              defaultValue={website}
              value={editedWebsite}
              onChange={(e) => setEditedWebsite(e.target.value)}
            />
          </div>
          <div className="pb-4 pt-1">
            <Label htmlFor="email" className="capitalize">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              defaultValue={email}
              value={editedEmail}
              onChange={(e) => setEditedEmail(e.target.value)}
            />
          </div>
          <DialogFooter className="flex flex-row justify-between gap-3">
            <Button onClick={() => setDialogOpen(false)} variant={"secondary"}>
              Cancel
            </Button>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
