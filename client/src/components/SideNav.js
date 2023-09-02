// Sidebar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [sidebarWidth, setSidebarWidth] = useState('1/4');
  const [isMinimized, setIsMinimized] = useState(false);


  const toggleSidebar = () => {
    if (isMinimized) {
      setSidebarWidth('1/10'); // Ako je minimiziran, vraćamo na normalnu širinu
    } else {
      setSidebarWidth('1/12'); // Inače, minimiziramo
    }
    setIsMinimized(!isMinimized); // Invertiramo stanje minimizacije
  };

  return (
    <div className={`bg-gray-800 text-white h-full w-${sidebarWidth} fixed top-20 left-0 p-4 transition-all duration-300 obican_text flex flex-col `}>
      <button onClick={toggleSidebar} className="mb-2 px-2 py-1 bg-gray-600 hover:bg-gray-700 rounded-lg text-white">
        {isMinimized ? '>' : '<'}
      </button>

      { isMinimized ? null : (
        <div>
        <NavLink className="mb-2 text-white hover:text-gray-600 block px-2 py-1 text-center" to="/admin/summary"> Summary </NavLink>
        <NavLink className="mb-2 text-white hover:text-gray-600 block px-2 py-1 text-center" to="/admin/products"> Products </NavLink>
        <NavLink className="mb-2 text-white hover:text-gray-600 block px-2 py-1 text-center" to="/admin/orders"> Orders </NavLink>
        <NavLink className="mb-2 text-white hover:text-gray-600 block px-2 py-1 text-center" to="/admin/users"> Users </NavLink>
        </div>
      )}
       
    
    </div>
  );
}

export default Sidebar;
