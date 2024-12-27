import React, { useState } from 'react';
import {
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AdminTryoutDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setIsSidebarOpen(false); // Tutup sidebar setelah navigasi pada perangkat mobile.
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <div className="flex h-screen">
      {/* Overlay untuk sidebar pada perangkat mobile */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-40 transition-opacity lg:hidden ${
          isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 bg-blue-900 w-64 text-white z-50 transform transition-transform lg:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header Sidebar */}
        <div className="flex justify-between items-center p-4 bg-blue-800">
          <h1 className="text-xl font-bold">Admin Tryout</h1>
          <button className="lg:hidden" onClick={toggleSidebar}>
            <X size={24} />
          </button>
        </div>

        {/* Menu Navigasi */}
        <nav className="p-4 space-y-2">
  <button
    onClick={() => handleNavigate('/')}
    className="flex items-center space-x-2 p-2 w-full text-left hover:bg-blue-700 rounded"
  >
    <LayoutDashboard size={20} />
    <span>Dashboard</span>
  </button>
  <button
    onClick={() => handleNavigate('/Try-out')}
    className="flex items-center space-x-2 p-2 w-full text-left hover:bg-blue-700 rounded"
  >
    <FileText size={20} />
    <span>Tryout</span>
  </button>
  <button
    onClick={() => handleNavigate('/user')}
    className="flex items-center space-x-2 p-2 w-full text-left hover:bg-blue-700 rounded"
  >
    <Users size={20} />
    <span>User Management</span>
  </button>
  
  {/* Manajemen Soal */}
  <button
    onClick={() => handleNavigate('/management/questions')}
    className="flex items-center space-x-2 p-2 w-full text-left hover:bg-blue-700 rounded"
  >
    <FileText size={20} />
    <span>Manajemen Soal</span>
  </button>
  
  {/* Dropdown Menu */}
  <div className="flex flex-col">
    <button
      onClick={toggleDropdown}
      className="flex items-center justify-between p-2 w-full text-left hover:bg-blue-700 rounded"
    >
      <div className="flex items-center space-x-2">
        <Settings size={20} />
        <span>Settings</span>
      </div>
      {dropdownOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
    </button>
    {dropdownOpen && (
      <div className="pl-6 space-y-2">
        <button
          onClick={() => handleNavigate('/settings/profile')}
          className="block w-full text-left hover:bg-blue-700 rounded p-2"
        >
          Profile Settings
        </button>
        <button
          onClick={() => handleNavigate('/settings/preferences')}
          className="block w-full text-left hover:bg-blue-700 rounded p-2"
        >
          Preferences
        </button>
      </div>
    )}
  </div>
</nav>


        {/* Logout */}
        <div className="mt-auto p-4">
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 w-full p-2 hover:bg-blue-700 rounded"
          >
            <X size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Konten Utama */}
     
    </div>
  );
}
