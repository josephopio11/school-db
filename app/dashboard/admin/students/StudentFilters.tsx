"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Class, Course, Section } from "@prisma/client";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";

const FormSchema = z.object({
  class: z.string().optional(),
  subject: z.string().optional(),
  stream: z.string().optional(),
  house: z.string().optional(),
});

type UserRolesPageProps = {
  classes: Class[];
  subjects: Course[];
  streams: Section[];
  houses: { name: string; id: string }[];
};

export default function StudentFilters({
  classes,
  subjects,
  streams,
  houses,
}: UserRolesPageProps) {
  // const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function resetFilters() {
    // form.reset();
    router.push(`${pathname}`);
  }

  function onSubmit(data: z.infer<typeof FormSchema>) {
    let atukot_searchparam;
    let subject_searchparam;
    let stream_searchparam;
    let house_searchparam;

    const atukot = data.class;
    if (!!atukot) {
      atukot_searchparam = `class=${atukot}`;
    } else {
      atukot_searchparam = "";
    }
    const subject = data.subject;
    if (!!subject) {
      subject_searchparam = `&subject=${subject}`;
    } else {
      subject_searchparam = "";
    }
    const stream = data.stream;
    if (!!stream) {
      stream_searchparam = `&stream=${stream}`;
    } else {
      stream_searchparam = "";
    }
    const house = data.house;
    if (!!house) {
      house_searchparam = `&house=${house}`;
    } else {
      house_searchparam = "";
    }

    router.push(
      `${pathname}?${atukot_searchparam}${subject_searchparam}${stream_searchparam}${house_searchparam}`
    );

    // console.log(atukot, subject, stream, house);

    toast.success(
      <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        <code className="text-white">{JSON.stringify(data, null, 2)}</code>
      </pre>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <div className="flex flex-row gap-2 items-center">
          <FormField
            control={form.control}
            name="class"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center space-x-4 w-1/5">
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a class" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {classes.map((cls) => (
                      <SelectItem value={cls.id} key={cls.id}>
                        {cls.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center space-x-4 w-1/5">
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {subjects.map((subject) => (
                      <SelectItem value={subject.id} key={subject.id}>
                        {subject.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="stream"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center space-x-4 w-1/5">
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a stream" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {streams.map((stream) => (
                      <SelectItem value={stream.id} key={stream.id}>
                        {stream.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="house"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center space-x-4 w-1/5">
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a house" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {houses.map((house) => (
                      <SelectItem value={house.id} key={house.id}>
                        {house.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            onClick={() => resetFilters}
            variant={"outline"}
            size={"sm"}
            type="button"
          >
            Clear
          </Button>
          <Button type="submit" variant={"outline"} size={"sm"}>
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
