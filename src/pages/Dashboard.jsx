import DashboardCard from "../components/DashboardCard";

export default function DashboardContent() {
  return (
    <div className="flex flex-col lg:ml-[250px] ml-20 mt-5 p-10 lg:mt-5 w-full">
      {/* Header Section */}
      <div className="mb-10 text-center">
        <h1 className="text-2xl lg:text-4xl font-bold text-gray-800">
          Dashboard Overview
        </h1>
        <p className="text-gray-500 mt-2">
          A quick glance at the current metrics and statistics
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard
          title="Total Peserta"
          value="1,234"
          description="Number of participants registered"
        />
        <DashboardCard
          title="Tryout Aktif"
          value="5"
          description="Currently active tryouts"
        />
        <DashboardCard
          title="Rata-rata Skor"
          value="78.5"
          description="Average score of participants"
        />
      </div>
    </div>
  );
}
