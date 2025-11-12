import React, { useState } from 'react';
import { User, Mail, Phone, Calendar, Heart, MapPin, Award, Edit3, Camera, Shield } from 'lucide-react';

export default function Profile() {
//   const [isEditing, setIsEditing] = useState(false);
  

  const personalInfo = [
    { label: "Date of Birth", value: "April 4, 2005", icon: <Calendar className="w-5 h-5" /> },
    { label: "Phone Number", value: "+91 867782", icon: <Phone className="w-5 h-5" /> },
    { label: "Religion", value: "Christian", icon: <Heart className="w-5 h-5" /> },
    { label: "Email", value: "janedoe@gmail.com", icon: <Mail className="w-5 h-5" /> },
    { label: "Location", value: "Port Harcourt, NG", icon: <MapPin className="w-5 h-5" /> },
  ];
  

 

  const achievements = [
    { title: "Top Performer", date: "March 2025", color: "bg-[#007991] border-cyan-600" },
    { title: "100 Days Streak", date: "Feb 2025", color: "bg-[#FF9635] border-orange-200" },
    { title: "Fast Learner", date: "Jan 2025", color: "bg-cyan-600" },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Main Profile Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-6">
          {/* Cover Image with Gradient */}
          <div className="relative h-48 bg-[#007991]">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-4 right-4">
            
            </div>
          </div>

          {/* Profile Info Section */}
          <div className="relative px-8 pb-8">
            {/* Avatar */}
            <div className="flex flex-col md:flex-row items-center md:items-end -mt-16 mb-6">
              <div className="relative">
                <div className="w-32 h-32 rounded-full border-4 border-white bg-[#007991] shadow-xl flex items-center justify-center">
                  <User className="w-16 h-16 text-white" />
                </div>
                
              </div>

              <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left flex-1 lg:">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <h1 className="text-3xl font-bold text-gray-800 ">Jane Doe</h1>
                 
                </div>
                <p className="text-gray-600 mt-1">Frontend Developer Student</p>
                
              </div>

              {/* <button 
              value={profileData}
                // onClick={() => setIsEditing(!isEditing)}
                onChange={(e) => setIsEditing(e.target.value)}
                className="mt-4 md:mt-0 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-6 py-2.5 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <Edit3 className="w-4 h-4" />
                Edit Profile
              </button> */}
            </div>

            
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Personal Information */}
          <div className="md:col-span-2 bg-white rounded-3xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-indigo-100 p-2 rounded-lg">
                <User className="w-6 h-6 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Personal Information</h2>
            </div>

            <div className="space-y-4">
              {personalInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100/50 rounded-xl hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-white p-2 rounded-lg text-indigo-600 group-hover:bg-indigo-50 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                      <p className="font-semibold text-gray-800">{item.value}</p>
                    </div>
                  </div>
                  {/* {isEditing && (
                    <button className="text-indigo-600 hover:text-indigo-700 transition-colors">
                      <Edit3 className="w-4 h-4" />
                    </button>
                  )} */}
                </div>
              ))}
            </div>

            {/* Bio Section */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">About Me</h3>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-100">
                <p className="text-gray-700 leading-relaxed">
                  Passionate frontend developer with a keen interest in creating beautiful, 
                  responsive web applications. Currently learning React and modern web technologies. 
                  Always eager to take on new challenges and grow my skills.
                </p>
              </div>
            </div>
          </div>

          {/* Achievements Sidebar */}
          <div className="space-y-6">
            {/* Achievements */}
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-yellow-100 p-2 rounded-lg">
                  <Award className="w-5 h-5 text-yellow-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">Achievements</h3>
              </div>
              
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-xl border ${achievement.color} transition-all hover:shadow-md cursor-pointer`}
                  >
                    <p className="font-semibold text-sm">{achievement.title}</p>
                    <p className="text-xs opacity-75 mt-1">{achievement.date}</p>
                  </div>
                ))}
              </div>

             
            </div>

            {/* Skills */}
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Top Skills</h3>
              
              <div className="space-y-3">
                {[
                  { skill: "React", level: 90 },
                  { skill: "JavaScript", level: 85 },
                  { skill: "CSS/Tailwind", level: 95 },
                  { skill: "HTML", level: 100 },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-gray-700">{item.skill}</span>
                      <span className="text-gray-500">{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-cyan-600 to-cyan-300 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
