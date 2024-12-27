export default function UsersContent() {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md border border-blue-200 flex flex-col lg:ml-[250px] ml-20 mt-5 m-10 lg:mt-5 w-full">
        <h3 className="text-xl font-semibold mb-4 text-blue-900">Daftar Peserta Tryout</h3>
        <table className="w-full">
          <thead>
            <tr className="bg-blue-100">
              <th className="p-2 text-left">Nama</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-left">Skor Terakhir</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Budi Santoso</td>
              <td className="p-2">budi@example.com</td>
              <td className="p-2">85</td>
            </tr>
            <tr className="">
              <td className="p-2">Ani Wijaya</td>
              <td className="p-2">ani@example.com</td>
              <td className="p-2">92</td>
            </tr>
            
            {/* Tambahkan lebih banyak baris sesuai kebutuhan */}
          </tbody>
        </table>
      </div>
    );
  }