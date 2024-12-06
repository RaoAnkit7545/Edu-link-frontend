import React from "react";

const CourseCard = ({ title, category }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="flex items-center space-x-4">
        <div className="bg-purple-100 rounded-full p-4">
          <span className="text-purple-600 font-bold">📘</span>
        </div>
        <div>
          <h2 className="font-bold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-500">{category}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
