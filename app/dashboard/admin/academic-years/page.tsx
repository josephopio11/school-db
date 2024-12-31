import PageHeader from "@/components/page-header";
import StatCard from "@/components/stat-card";
import { cn, formatDate } from "@/lib/utils";
import { DollarSign } from "lucide-react";
import AYEntryForm from "./EntryForm";
import { getAllAcademicYears } from "./actions";

const AcademicYearsPage = async () => {
  const data = await getAllAcademicYears();
  return (
    <>
      <PageHeader title="Academic Years" />
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
            <div className="rounded-xl border bg-card text-card-foreground shadow md:col-span-3">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="font-semibold leading-none tracking-tight">
                  Academic Years
                </div>
                <div className="text-sm text-muted-foreground">
                  Here are the entries for the available academic years.
                </div>
              </div>
              <div className="pb-6 px-4 pt-0">
                <div className="space-y-4">
                  {data.length === 0 && (
                    <div className="flex items-center justify-center h-64">
                      <p className="text-muted-foreground">
                        No academic years have been added yet.
                      </p>
                    </div>
                  )}
                  {data.map((ay) => (
                    <div
                      className={cn(
                        "flex items-center px-2 py-4 rounded-md hover:bg-card-foreground/10 transition-colors",
                        ay.status && "bg-emerald-500/10"
                      )}
                      key={ay.id}
                    >
                      <span className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
                        <img
                          className="aspect-square h-full w-full"
                          alt="Avatar"
                          src="https://placehold.co/400x400?text=AY"
                        />
                      </span>
                      <div className="ml-4 space-y-1">
                        <p className="text-base font-medium leading-none">
                          {ay.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {formatDate(ay.startDate)} - {formatDate(ay.endDate)}
                        </p>
                      </div>
                      <div className="ml-auto font-medium">
                        {ay.status && "Current"}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-xl border bg-card text-card-foreground shadow md:col-span-4">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="font-semibold leading-none tracking-tight">
                  Add Academic Year
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
    </>
  );
};

export default AcademicYearsPage;
