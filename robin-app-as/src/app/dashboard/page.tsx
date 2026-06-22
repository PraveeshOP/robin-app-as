import DashboardH1 from "@/app/dashboard/_components/dashboardH1";
import DashboardH2 from "@/app/dashboard/_components/dashboardH2";
import DashboardH3 from "@/app/dashboard/_components/dashboardH3";
import DashboardH4 from "@/app/dashboard/_components/dashboardH4";
import DashboardH5 from "@/app/dashboard/_components/dashboardH5";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-8 pt-6 sm:pt-10 lg:gap-12 lg:pt-16">
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
