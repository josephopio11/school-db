import PageHeader from "@/components/page-header";
import StatCard2 from "@/components/stat-card2";
import { DollarSign } from "lucide-react";

const SubjectsPage = () => {
  return (
    <>
      <PageHeader title="Statistics" />
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
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
      </div>
    </>
  );
};

export default SubjectsPage;
