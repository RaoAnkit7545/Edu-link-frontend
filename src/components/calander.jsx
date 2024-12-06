import React, { useState } from "react";
import { ChevronLeft, ChevronRight, BookOpen, Award } from "lucide-react";

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const changeMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  return (
    <div className="w-80 bg-gradient-to-br from-customPurple to-purple-600 text-white  shadow-2xl overflow-hidden">
      <div className="bg-purple-900 bg-opacity-30 p-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <BookOpen className="text-white" size={32} />
          <div>
            <h2 className="text-xl font-bold">My Learning Schedule</h2>
            <p className="text-sm text-purple-200">
              Track your academic journey
            </p>
          </div>
        </div>
        <Award className="text-yellow-400" size={32} />
      </div>
      <div>
        <img
          src="learning-illustration.png"
          alt="e-learning illuustration"
        ></img>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => changeMonth(-1)}
            className="hover:bg-purple-700 p-2 rounded-full transition"
          >
            <ChevronLeft />
          </button>
          <h3 className="text-xl font-semibold">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h3>
          <button
            onClick={() => changeMonth(1)}
            className="hover:bg-purple-700 p-2 rounded-full transition"
          >
            <ChevronRight />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2 text-center">
          {weekDays.map((day) => (
            <div key={day} className="text-xs font-bold text-purple-200">
              {day}
            </div>
          ))}

          {[...Array(firstDayOfMonth)].map((_, i) => (
            <div key={`empty-${i}`} className=""></div>
          ))}

          {[...Array(daysInMonth)].map((_, i) => {
            const day = i + 1;
            const isToday =
              day === new Date().getDate() &&
              currentDate.getMonth() === new Date().getMonth() &&
              currentDate.getFullYear() === new Date().getFullYear();

            return (
              <div
                key={day}
                className={`
                  py-2 rounded-lg 
                  ${
                    isToday
                      ? "bg-yellow-400 text-purple-900 font-bold"
                      : "hover:bg-purple-700"
                  }
                  transition cursor-pointer
                `}
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
