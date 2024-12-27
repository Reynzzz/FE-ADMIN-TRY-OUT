export default function DashboardCard({ title, value }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md border border-blue-200 ">
        <h3 className="text-lg font-semibold mb-2 text-blue-900">{title}</h3>
        <p className="text-3xl font-bold text-blue-700">{value}</p>
      </div>
    );
  }