import { BookOpen } from "lucide-react";
import React from "react";

// Courses Tab Component
const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      progress: 75,
      modules: 12,
      completed: 9,
    },
    {
      id: 2,
      title: "React & Modern JavaScript",
      progress: 90,
      modules: 8,
      completed: 7,
    },
    {
      id: 3,
      title: "UI/UX Design Fundamentals",
      progress: 45,
      modules: 10,
      completed: 4,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <article
            key={course.id}
            className="hover:shadow-lg transition-shadow"
          >
            <div>
              <div className="w-full h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mb-4 flex items-center justify-center">
                <BookOpen size={48} className="text-white" />
              </div>
              <div className="text-lg">{course.title}</div>
              <div>
                {course.completed} of {course.modules} modules
              </div>
            </div>
            <div>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-semibold text-blue-600">
                    {course.progress}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Courses;
