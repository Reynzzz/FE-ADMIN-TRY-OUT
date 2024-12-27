import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function QuestionDetail() {
  const { id } = useParams();

  // Dummy data soal
  const questions = [
    {
      id: 1,
      title: 'Soal Matematika Dasar',
      category: 'Matematika',
      createdAt: '2024-11-18',
      options: ['2 + 2 = 4', '3 + 3 = 6', '4 + 4 = 8', '5 + 5 = 10'],
    },
    {
      id: 2,
      title: 'Soal Bahasa Inggris',
      category: 'Bahasa',
      createdAt: '2024-11-17',
      options: ['Apple is a fruit', 'She is a boy', 'I have two cat', 'They is running'],
    },
    {
      id: 3,
      title: 'Soal Fisika',
      category: 'Fisika',
      createdAt: '2024-11-16',
      options: [
        'Newton adalah satuan gaya',
        'Kecepatan adalah jarak/waktu',
        'Energi kinetik adalah mv^2',
        'Massa adalah volume x berat jenis',
      ],
    },
  ];

  const question = questions.find((q) => q.id === parseInt(id));

  // State untuk menyimpan data yang sedang diedit
  const [editData, setEditData] = useState(question);

  if (!editData) {
    return <p>Soal tidak ditemukan!</p>;
  }

  // Fungsi untuk mengelola perubahan input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  // Fungsi untuk mengelola perubahan pilihan ganda
  const handleOptionChange = (index, value) => {
    const updatedOptions = [...editData.options];
    updatedOptions[index] = value;
    setEditData({ ...editData, options: updatedOptions });
  };

  // Fungsi untuk menyimpan data
  const handleSave = () => {
    console.log('Data yang disimpan:', editData);
    alert('Data berhasil disimpan!');
  };
  const navigate = useNavigate()

  return (
    <div className="bg-white rounded-lg shadow-md border border-blue-200 flex flex-col lg:ml-[250px] ml-20 mt-5 m-10 p-5 lg:mt-5 w-full">
      <h1 className="text-2xl font-bold mb-4">Edit Soal</h1>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Judul Soal:</label>
        <input
          type="text"
          name="title"
          value={editData.title}
          onChange={handleInputChange}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Kategori:</label>
        <input
          type="text"
          name="category"
          value={editData.category}
          onChange={handleInputChange}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Tanggal Dibuat:</label>
        <input
          type="date"
          name="createdAt"
          value={editData.createdAt}
          onChange={handleInputChange}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Pilihan Ganda:</label>
        {editData.options.map((option, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="text"
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              className="flex-1 border border-gray-300 p-2 rounded mr-2"
            />
          </div>
        ))}
      </div>
        <div className='flex gap-5'>
      <button
        onClick={handleSave}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        Simpan
      </button>
      <button
        onClick={() => navigate(-1)}
        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
      >
        Back
      </button>
        </div>
    </div>
  );
}
