import React, { useState } from 'react';
import AddSoal from '../components/AddSoal';
import { useNavigate } from 'react-router-dom';

export default function QuestionManagement() {
  // Dummy data untuk daftar soal
  const [questions, setQuestions] = useState([
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
  ]);

  const handleAddQuestion = () => {
    alert('Navigasi ke halaman tambah soal');
  };

  const navigate = useNavigate()

  return (
    <div className=" bg-white rounded-lg shadow-md border border-blue-200 flex flex-col lg:ml-[250px] ml-20 mt-5 m-10 p-5 lg:mt-5 w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Manajemen Soal</h1>
       <AddSoal/>
      </div>

      {/* Tabel */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow-md rounded-lg">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="py-3 px-4 text-left">#</th>
              <th className="py-3 px-4 text-left">Judul Soal</th>
              <th className="py-3 px-4 text-left">Kategori</th>
              <th className="py-3 px-4 text-left">Tanggal Dibuat</th>
              <th className="py-3 px-4 text-left">Pilihan Ganda</th>
              <th className="py-3 px-4 text-left">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((question, index) => (
              <tr key={question.id} className="border-b hover:bg-gray-100">
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4">{question.title}</td>
                <td className="py-3 px-4">{question.category}</td>
                <td className="py-3 px-4">{question.createdAt}</td>
                <td className="py-3 px-4">
                  <ul className="list-disc pl-4">
                    {question.options.map((option, i) => (
                      <li key={i}>{option}</li>
                    ))}
                  </ul>
                </td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => navigate(`/questions/${question.id}`)}
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-3 rounded"
                  >
                    Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
