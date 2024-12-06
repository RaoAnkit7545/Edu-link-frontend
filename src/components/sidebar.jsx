import React from "react";
import { BookOpen, BellRing, HelpCircle, User } from "lucide-react";

const Sidebar = () => {
  const handleMenuClick = (menuItem) => {
    console.log(menuItem);
  };

  return (
    <div className="w-72 h-screen bg-gradient-to-b from-purple-50 to-purple-100 shadow-xl px-6 py-8 flex flex-col">
      <div className="flex items-center mb-10">
        <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
          <BookOpen color="white" size={24} />
        </div>
        <h1 className="text-3xl font-extrabold text-purple-800 font-Gist">
          Edu-Link
        </h1>
      </div>
      <nav className="flex-grow">
        <ul className="space-y-4">
          <li
            className="flex items-center p-3 hover:bg-purple-200 rounded-lg transition-all duration-300 cursor-pointer group"
            onClick={() => handleMenuClick("My Course")}
          >
            <BookOpen
              className="mr-4 text-purple-600 group-hover:text-purple-800"
              size={24}
            />
            <span className="text-purple-700 font-semibold group-hover:text-purple-900 font-Gist">
              My Course
            </span>
          </li>
          <li
            className="flex items-center p-3 hover:bg-purple-200 rounded-lg transition-all duration-300 cursor-pointer group"
            onClick={() => handleMenuClick("Profile")}
          >
            <User
              className="mr-4 text-purple-600 group-hover:text-purple-800"
              size={24}
            />
            <span className="text-purple-700 font-semibold group-hover:text-purple-900 font-Gist">
              Profile
            </span>
          </li>
          <li
            className="flex items-center p-3 hover:bg-purple-200 rounded-lg transition-all duration-300 cursor-pointer group"
            onClick={() => handleMenuClick("Catalog Course")}
          >
            <User
              className="mr-4 text-purple-600 group-hover:text-purple-800"
              size={24}
            />
            <span className="text-purple-700 font-semibold group-hover:text-purple-900 font-Gist">
              Catalog Course
            </span>
          </li>
          <li
            className="flex items-center p-3 hover:bg-purple-200 rounded-lg transition-all duration-300 cursor-pointer group"
            onClick={() => handleMenuClick("Announcement")}
          >
            <BellRing
              className="mr-4 text-purple-600 group-hover:text-purple-800"
              size={24}
            />
            <span className="text-purple-700 font-semibold group-hover:text-purple-900 font-Gist">
              Announcement
            </span>
          </li>
          <li
            className="flex items-center p-3 hover:bg-purple-200 rounded-lg transition-all duration-300 cursor-pointer group"
            onClick={() => handleMenuClick("Help Center")}
          >
            <HelpCircle
              className="mr-4 text-purple-600 group-hover:text-purple-800"
              size={24}
            />
            <span className="text-purple-700 font-semibold group-hover:text-purple-900 font-Gist">
              Help Center
            </span>
          </li>
        </ul>
      </nav>

      <div className="mt-auto bg-purple-200 rounded-lg p-4 flex items-center shadow-md">
        <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
          <User color="white" size={24} />
        </div>
        <div className="font-Gist">
          <p className="text-sm text-purple-700 opacity-75">Welcome back</p>
          <h2 className="font-bold text-purple-900">keshav~</h2>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
