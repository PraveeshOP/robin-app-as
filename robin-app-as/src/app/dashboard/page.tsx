import DashboardH1 from "@/components/dashboardH1";
import DashboardH2 from "@/components/dashboardH2";

export default function Dashboard() {
  return (
    <div className="flex flex-col">
      <section>
        <DashboardH1 />
      </section>
      <section>
        <DashboardH2 />
      </section>
    </div>
  );
}
