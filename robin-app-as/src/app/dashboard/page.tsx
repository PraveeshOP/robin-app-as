import DashboardH1 from "@/components/dashboardH1";
import DashboardH2 from "@/components/dashboardH2";
import DashboardH3 from "@/components/dashboardH3";
import DashboardH4 from "@/components/dashboardH4";
import DashboardH5 from "@/components/dashboardH5";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4 mt-20">
      <section>
        <DashboardH1 />
      </section>
      <section>
        <DashboardH2 />
      </section>
      <section>
        <DashboardH3 />
      </section>
      <section>
        <DashboardH4 />
      </section>
      <section>
        <DashboardH5 />
      </section>
    </div>
  );
}
