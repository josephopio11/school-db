import PageHeader from "@/components/page-header";
import { cn } from "@/lib/utils";
import { getSubjectById } from "../actions";

const SingleSubject = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const subject = await getSubjectById(id);
  if (!subject) {
    return (
      <>
        <PageHeader title="Subjects" title2="Not Found" />
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="flex flex-col items-center justify-center min-h-64">
              <h2 className="text-7xl">404</h2>
              <p className="text-muted-foreground">
                The subject you are looking for does not exist.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <PageHeader title="Subjects" title2={subject.name} />
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min">
          <div className="grid gap-4 md:grid-cols-7 lg:grid-cols-7">
            <div className="rounded-xl border bg-card text-card-foreground shadow md:col-span-4">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="font-semibold text-2xl leading-none tracking-tight">
                  {subject.name} details
                </div>
                <div className="text-sm text-muted-foreground">
                  This subject is{" "}
                  <span className="uppercase font-bold text-destructive">
                    {subject.type}
                  </span>
                </div>
                <pre>{JSON.stringify(subject, null, 2)}</pre>
              </div>
              <div className="pb-6 px-4 pt-0">
                <div className="space-y-4">
                  <div
                    className={cn(
                      "flex items-center px-2 py-4 rounded-md hover:bg-card-foreground/5 transition-colors"
                    )}
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
                        One thing
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
                    <div className="ml-auto font-medium">Current</div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="flex flex-col md:col-span-3">
              <div className="rounded-xl border bg-card text-card-foreground shadow">
                <div className="flex flex-col space-y-1.5 p-6">
                  <div className="font-semibold leading-none tracking-tight">
                    Add Subject/Course
                  </div>
                </div>
                <div className="p-6 pt-0 flex flex-col">
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleSubject;
