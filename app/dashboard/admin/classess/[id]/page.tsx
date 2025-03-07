import PageHeader from "@/components/page-header";
import StatCard2 from "@/components/stat-card2";
import { Book, GraduationCap, Users } from "lucide-react";
import { getClassById } from "../actions";

const ClassPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const atukot = await getClassById(id);
  if (!atukot) {
    return (
      <>
        <PageHeader title="Classes" title2="Not Found" />
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="flex flex-col items-center justify-center min-h-64">
              <h2 className="text-7xl">404</h2>
              <p className="text-muted-foreground">
                The class you are looking for does not exist.
              </p>
            </div>
          </div>
        </div>{" "}
      </>
    );
  }
  return (
    <>
      <PageHeader
        title={"Classes"}
        link="/dashboard/admin/classess"
        title2={atukot?.name}
      />
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 sm:grid-cols-3">
          <StatCard2 title={"Subjects"} value={22} percentage={0} Icon={Book} />
          <StatCard2
            title={"Teachers"}
            value={38}
            percentage={-3}
            Icon={GraduationCap}
          />
          <StatCard2 title={"Classes"} value={16} percentage={2} Icon={Users} />
        </div>
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
      </div>
    </>
  );
};

export default ClassPage;
