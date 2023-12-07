import React from "react";

const Sidebar = () => {
  return (
    <div
      className="hidden md:block fixed z-10 top-0 left-0 h-screen w-64 bg-gray-800 text-white"
    >
      <ul className="mt-10">
        <li className="p-2 hover:bg-gray-700 rounded-md">
          <a href="#">Dashboard</a>
        </li>
        <li className="p-2 hover:bg-gray-700 rounded-md">
          <a href="#">Tasks</a>
        </li>
        <li className="p-2 hover:bg-gray-700 rounded-md">
          <a href="#">Settings</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
