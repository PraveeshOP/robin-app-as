import NavBar from "@/components/NavBar";
import DashboardH1 from "@/components/dashboardH1";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-30">
      <NavBar />
      <DashboardH1 />
    </div>
  );
}
