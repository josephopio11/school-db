import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import StudentFilters from "./StudentFilters";
import { studentFilters } from "./actions";

const UserRolesPage = async () => {
  const { classes, houses, streams, subjects } = await studentFilters();
  return (
    <>
      <PageHeader title="Student Administration" />
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min">
          <div className="rounded-xl border bg-card text-card-foreground shadow">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="flex flex-row justify-between">
                <span className="font-semibold leading-none tracking-tight ">
                  Student Administration
                </span>
                <Button size={"sm"}>Add New Student</Button>
              </div>
              <StudentFilters
                classes={classes}
                subjects={subjects}
                streams={streams}
                houses={houses}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserRolesPage;
