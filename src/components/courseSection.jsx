import React from "react";
import { Award, Star, BookOpen } from "lucide-react";
import CourseCard from "./courseCard";

function CourseSection() {
  const courses = [
    { title: "English", category: "Language", progress: 65 },
    { title: "Mathematics", category: "Math", progress: 45 },
    { title: "Biology", category: "Science", progress: 80 },
  ];

  return (
    <div className=" p-6 ">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <BookOpen className="mr-3 text-purple-600 font-Gist" />
        My Courses
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 font-Gist"
          >
            <CourseCard
              title={course.title}
              category={course.category}
              progress={course.progress}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseSection;
