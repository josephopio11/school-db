import PageHeader from "@/components/page-header";
import StatCard2 from "@/components/stat-card2";
import { cn } from "@/lib/utils";
import { DollarSign } from "lucide-react";
import Link from "next/link";
import { getAllSubjects } from "./actions";
import EnterSubjectForm from "./EntryForm";

const SubjectsPage = async () => {
  const data = await getAllSubjects();
  return (
    <>
      <PageHeader title="Subjects" link="/dashboard/admin/subjects" />
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 sm:grid-cols-3">
          <StatCard2
            title={"Number of Students"}
            value={630}
            percentage={0}
            Icon={DollarSign}
          />
          <StatCard2
            title={"Number of Teachers"}
            value={38}
            percentage={-3}
            Icon={DollarSign}
          />
          <StatCard2
            title={"Number of Parents"}
            value={78}
            percentage={2}
            Icon={DollarSign}
          />
        </div>
        <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min">
          <div className="grid gap-4 md:grid-cols-7 lg:grid-cols-7">
            <div className="rounded-xl border bg-card text-card-foreground shadow md:col-span-4">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="font-semibold leading-none tracking-tight">
                  Subjects/Courses
                </div>
                <div className="text-sm text-muted-foreground">
                  List of subjects available in the school.
                </div>
              </div>
              <div className="pb-6 px-4 pt-0">
                <div className="space-y-4">
                  {data.length === 0 && (
                    <div className="flex items-center justify-center h-64">
                      <p className="text-muted-foreground">
                        No subjects have been added yet.
                      </p>
                    </div>
                  )}
                  {data.map((dat) => (
                    <Link
                      href={`/dashboard/admin/subjects/${dat.id}`}
                      passHref
                      className={cn(
                        "flex items-center px-2 py-4 rounded-md hover:bg-card-foreground/5 transition-colors",
                        dat.type === "core" && "bg-emerald-500/10"
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
                          {dat.name}
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
                        {dat.sessionId && "Current"}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col md:col-span-3">
              <div className="rounded-xl border bg-card text-card-foreground shadow">
                <div className="flex flex-col space-y-1.5 p-6">
                  <div className="font-semibold leading-none tracking-tight">
                    Add Subject/Course
                  </div>
                </div>
                <div className="p-6 pt-0 flex flex-col">
                  {/* THis is where the data entry form is going to be */}
                  <EnterSubjectForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubjectsPage;
