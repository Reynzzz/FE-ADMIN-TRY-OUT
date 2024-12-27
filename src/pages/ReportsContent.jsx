import AddTryOut from "../components/AddTryOut";

export default function ReportsContent() {
    return (
      <div className="bg-white rounded-lg shadow-md border border-blue-200 flex flex-col lg:ml-[250px] ml-20 mt-5 m-10 p-5 lg:mt-5 w-full">
        <div className="flex justify-between">
        <h3 className="text-xl font-semibold mb-4 text-blue-900">Laporan Tryout</h3>
        <AddTryOut/>
        </div>
        <ul className="space-y-2">
          <li className="flex justify-between items-center p-2 bg-blue-50 rounded">
            <span>Tryout UTBK 2024 Gelombang 1</span>
            <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">Lihat</button>
          </li>
          <li className="flex justify-between items-center p-2">
            <span>Tryout SNBT 2024 Batch 2</span>
            <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">Lihat</button>
          </li>
          {/* Tambahkan lebih banyak laporan sesuai kebutuhan */}
        </ul>
      </div>
    );
  }