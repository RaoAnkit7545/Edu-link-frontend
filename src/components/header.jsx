import React, { useState } from "react";
import { Search, Bell, User } from "lucide-react";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="bg-white shadow-md h-fit">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center py-4 space-y-4 sm:space-y-0">
          <div className="flex items-center justify-between w-full sm:w-auto space-x-4">
            <h1 className="text-2xl font-bold text-gray-800 font-Gist">
              Dashboard Activity
            </h1>
            <div className="hidden sm:block">
              <Bell className="text-gray-500 hover:text-gray-700 cursor-pointer" />
            </div>
          </div>

          <div className="flex items-center space-x-4 w-full sm:w-auto">
            <div className="relative flex-grow sm:flex-grow-0 font-Gist">
              <input
                type="text"
                placeholder="Search here"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-64 px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            <div className="hidden sm:block">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-600 transition">
                <User className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
