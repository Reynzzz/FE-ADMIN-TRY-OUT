export default function SettingsContent() {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md border border-blue-200">
        <h3 className="text-xl font-semibold mb-4 text-blue-900">Pengaturan Tryout</h3>
        <form>
          <div className="mb-4">
            <label htmlFor="tryoutName" className="block text-sm font-medium text-blue-900 mb-1">Nama Tryout</label>
            <input type="text" id="tryoutName" className="w-full p-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="tryoutDate" className="block text-sm font-medium text-blue-900 mb-1">Tanggal Pelaksanaan</label>
            <input type="date" id="tryoutDate" className="w-full p-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="tryoutDuration" className="block text-sm font-medium text-blue-900 mb-1">Durasi (menit)</label>
            <input type="number" id="tryoutDuration" className="w-full p-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Simpan Pengaturan</button>
        </form>
      </div>
    );
  }