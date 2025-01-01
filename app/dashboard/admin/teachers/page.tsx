import PageHeader from "@/components/page-header";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { getAllTeachers } from "./actions";
import TeacherEntryForm from "./EntryForm";

const TeachersPage = async () => {
  const data = await getAllTeachers();
  return (
    <>
      <PageHeader title="Teachers" />
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min">
          <div className="grid gap-4 md:grid-cols-7 lg:grid-cols-7">
            <div className="rounded-xl border bg-card text-card-foreground shadow md:col-span-4">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="font-semibold leading-none tracking-tight">
                  Teachers
                </div>
                <div className="text-sm text-muted-foreground">
                  List of teachers entered
                </div>
              </div>
              <div className="pb-6 px-4 pt-0">
                <div className="space-y-4">
                  {data.length === 0 && (
                    <div className="flex items-center justify-center h-64">
                      <p className="text-muted-foreground">
                        No teachers have been added yet.
                      </p>
                    </div>
                  )}
                  {data.map((dat) => (
                    <Link
                      href={`/dashboard/admin/teacherss/${dat.id}`}
                      passHref
                      className={cn(
                        "flex items-center px-2 py-4 rounded-md hover:bg-card-foreground/10 transition-colors"
                      )}
                      key={dat.id}
                    >
                      <span className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
                        <img
                          className="aspect-square h-full w-full"
                          alt="Avatar"
                          src="https://placehold.co/400x400?text=DAT"
                        />
                      </span>
                      <div className="ml-4 space-y-1">
                        <p className="text-base font-medium leading-none">
                          {dat.firstName} {dat.lastName}
                        </p>
                        {/* <p className="text-xs text-muted-foreground">
                          {dat.sections.length > 0 ? (
                            <span>Streams:</span>
                          ) : (
                            <span>&nbsp;</span>
                          )}{" "}
                          {dat.sections.map((sec) => sec.name).join(", ")}
                        </p> */}
                      </div>
                      <div className="ml-auto font-medium">
                        {/* {dat.sessionId && "Current"} */}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col md:col-span-3">
              <div className="rounded-xl border bg-card text-card-foreground shadow md:col-span-3">
                <div className="flex flex-col space-y-1.5 p-6">
                  <div className="font-semibold leading-none tracking-tight">
                    Add Class
                  </div>
                </div>
                <div className="p-6 pt-0">
                  {/* THis is where the data entry form is going to be */}
                  <TeacherEntryForm />
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default TeachersPage;
