import PageHeader from "@/components/page-header";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Edit2, GlobeIcon, Locate, Mail, Phone } from "lucide-react";
import Image from "next/image";
import { getSchoolInformation } from "./actions";
import CreateDummySchool from "./CreateDummySchool";
import { ContactInfoDialog, SchoolEditDialog } from "./SchoolEditDialog";

const SchoolPage = async () => {
  const data = await getSchoolInformation();
  const school = data[0];
  console.table(school);
  if (data.length === 0) {
    return (
      <>
        <PageHeader title="School Information" />
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min">
            <div className="rounded-xl border bg-card text-card-foreground shadow md:col-span-4 hover:shadow-lg transition-all duration-300">
              <div className="mx-auto w-full p-6 sm:p-8 md:p-10 lg:p-12">
                <CreateDummySchool />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <PageHeader title="School Information" />
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min">
          <div className="grid gap-4 md:grid-cols-7 lg:grid-cols-7 ">
            <div className="rounded-xl border bg-card text-card-foreground shadow md:col-span-4 hover:shadow-lg transition-all duration-300">
              <div className="mx-auto w-full p-6 sm:p-8 md:p-10 lg:p-12">
                <div className="flex flex-col items-center justify-center gap-6">
                  <div className="relative h-32 w-32 overflow-hidden md:h-40 md:w-40">
                    <Image
                      src={
                        school?.logo || "/placeholder.png" || "/placeholder.jpg"
                      }
                      alt="Tutor Profile"
                      width={160}
                      height={160}
                      className="aspect-square h-full w-full rounded-md object-contain"
                    />

                    <Edit2 className="absolute bottom-2 left-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 cursor-pointer text-white" />
                  </div>
                  <h1 className="relative mt-4 w-full px-8 text-center text-2xl font-bold md:text-3xl">
                    {school.name}
                    <SchoolEditDialog item={"name"} data={school.name} />
                  </h1>
                  <p className="relative w-full text-center text-sm text-muted-foreground md:text-base">
                    <span className={cn(!school?.motto && "italic")}>
                      {school?.motto || "No motto defined."}
                    </span>
                    <SchoolEditDialog
                      item={"motto"}
                      data={school.motto || ""}
                    />
                  </p>
                  <p
                    className={cn(
                      "relative w-full text-center text-sm text-muted-foreground md:text-base",
                      school?.description ? "" : "italic"
                    )}
                  >
                    <span>
                      {school?.description || "No description defined."}
                    </span>
                    <SchoolEditDialog
                      item={"description"}
                      data={school.description || ""}
                      isTextArea
                    />
                  </p>
                </div>
              </div>
              {/* end */}
            </div>

            <div className="flex flex-col md:col-span-3 gap-4 justify-between">
              <Card className="rounded-xl border bg-card text-card-foreground shadow md:col-span-3 hover:shadow-lg transition-all duration-300">
                <CardHeader className="relative">
                  <h3 className="text-xl">School Mission</h3>
                  <SchoolEditDialog
                    item={"mission"}
                    data={school.mission || ""}
                    isTextArea
                    className="right-2"
                  />
                </CardHeader>
                <CardContent>
                  <span className={cn("", school?.mission ? "" : "italic")}>
                    {school?.mission || "No mission defined."}
                  </span>
                </CardContent>
              </Card>
              <Card className="rounded-xl border bg-card text-card-foreground shadow md:col-span-3 hover:shadow-lg transition-all duration-300">
                <CardHeader className="relative">
                  <h3 className="text-xl">School Vision</h3>
                  <SchoolEditDialog
                    item={"vision"}
                    data={school.vision || ""}
                    isTextArea
                    className="right-2"
                  />
                </CardHeader>
                <CardContent>
                  <span className={cn("", school?.vision ? "" : "italic")}>
                    {school?.vision || "No vision defined."}
                  </span>
                </CardContent>
              </Card>
              <Card className="rounded-xl border bg-card text-card-foreground shadow md:col-span-3 hover:shadow-lg transition-all duration-300">
                <CardHeader className="relative">
                  <h3 className="text-2xl font-bold">Contact Details</h3>
                  <ContactInfoDialog
                    data={{
                      address: school.address || "",
                      phone: school.phone || "",
                      website: school.website || "",
                      email: school.email || "",
                    }}
                    className="right-2"
                  />
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 md:grid-cols-1 xl:grid-cols-2">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Locate className="h-4 w-4" />
                        <span
                          className={cn("", school?.address ? "" : "italic")}
                        >
                          {school?.address || "No address defined."}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4" />
                        <span className={cn("", school?.phone ? "" : "italic")}>
                          {school?.phone || "No phone defined."}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <GlobeIcon className="h-4 w-4" />
                        <span
                          className={cn("", school?.website ? "" : "italic")}
                        >
                          {school?.website || "No website defined."}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4" />
                        <span className={cn("", school?.email ? "" : "italic")}>
                          {school?.email || "No email defined."}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SchoolPage;
