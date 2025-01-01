import PageHeader from "@/components/page-header";
import StatCard from "@/components/stat-card";
import { cn } from "@/lib/utils";
import { DollarSign } from "lucide-react";
import Link from "next/link";
import AYEntryForm from "../academic-years/EntryForm";
import { getAllClassess } from "./actions";

const ClassesPage = async () => {
  const data = await getAllClassess();
  return (
    <>
      <PageHeader title="Classes" />
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 sm:grid-cols-3">
          <StatCard
            title={"Total Revenue"}
            value={818738}
            percentage={101}
            Icon={DollarSign}
          />
          <StatCard
            title={"Income"}
            value={88738}
            percentage={11}
            Icon={DollarSign}
          />
          <StatCard
            title={"Expenditure"}
            value={738}
            percentage={-9}
            Icon={DollarSign}
          />
        </div>
        <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min">
          <div className="grid gap-4 md:grid-cols-7 lg:grid-cols-7">
            <div className="rounded-xl border bg-card text-card-foreground shadow md:col-span-4">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="font-semibold leading-none tracking-tight">
                  Classes
                </div>
                <div className="text-sm text-muted-foreground">
                  List of classes Registered with their streams
                </div>
              </div>
              <div className="pb-6 px-4 pt-0">
                <div className="space-y-4">
                  {data.length === 0 && (
                    <div className="flex items-center justify-center h-64">
                      <p className="text-muted-foreground">
                        No classes have been added yet.
                      </p>
                    </div>
                  )}
                  {data.map((dat) => (
                    <Link
                      href={`/dashboard/admin/classess/${dat.id}`}
                      passHref
                      className={cn(
                        "flex items-center px-2 py-4 rounded-md hover:bg-card-foreground/10 transition-colors",
                        dat.name && "bg-emerald-500/10"
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
                        <p className="text-xs text-muted-foreground">
                          {dat.sections.length > 0 ? (
                            <span>Streams:</span>
                          ) : (
                            <span>&nbsp;</span>
                          )}{" "}
                          {dat.sections.map((sec) => sec.name).join(", ")}
                        </p>
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
              <div className="rounded-xl border bg-card text-card-foreground shadow md:col-span-3">
                <div className="flex flex-col space-y-1.5 p-6">
                  <div className="font-semibold leading-none tracking-tight">
                    Add Class
                  </div>
                </div>
                <div className="p-6 pt-0">
                  {/* THis is where the data entry form is going to be */}
                  <AYEntryForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassesPage;
