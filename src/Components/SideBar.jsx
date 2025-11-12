import React, { useState } from "react";

import {
  Home,
  FilePlus,
  Gift,
  Users,
  BarChart2,
  Settings,
  LogOut,
  CalendarDays,
  X,
  Briefcase,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import { FaRegUser } from "react-icons/fa6";
import { LiaAddressBookSolid } from "react-icons/lia";
import { GrResources } from "react-icons/gr";
import { BsEnvelope } from "react-icons/bs";
import NavItem from "./NavItem";

const SideBar = ({isOpen, setIsOpen}) => {
  
  const location =useLocation();
  
     return (
    <>
      {/* Mobile overlay background */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={(
          "fixed md:static z-40 top-0 left-0 h-full w-64 bg-white/70 backdrop-blur-sm border-r p-4 transform transition-transform duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        {/* Close button (mobile only) */}
        <div className="flex items-center justify-between md:hidden mb-4">
          <div className="font-semibold">Menu</div>
          <button onClick={() => setIsOpen(false)}>
            <X className="h-5 w-5" />
          </button>
        </div>

        

        {/* Navigation */}
        <nav className="space-y-6 bg-[#007991] lg:h-screen pt-3  ">
          <NavItem
            to="/dashboard"
            icon={<Home className="h-4 w-4" />}
            label="Dashboard"
            active={location.pathname === "/dash"}
          />
          <NavItem
            to="/DashboardProfile"
            icon={<FaRegUser className="h-4 w-4" />}
            label="Profile"
            active={location.pathname === "/profile"}
          />
          <NavItem
            to="/DashboardResources"
            icon={<GrResources className="h-4 w-4" />}
            label="Resources"
            active={location.pathname === "/resources"}
          />
          <NavItem
            to="/DashboardCourses"
            icon={<LiaAddressBookSolid className="h-4 w-4" />}
            label="Courses"
            active={location.pathname === "/courses"}
          />
          <NavItem
            to="/DashboardJob"
            icon={<Briefcase className="h-4 w-4" />}
            label="JobPage"
            active={location.pathname === "/job"}
          />
          <NavItem
            to="/notice"
            icon={<BsEnvelope className="h-4 w-4" />}
            label="NoticeBoard"
            active={location.pathname === "/notice"}
          />

          {/* <div className="mt-4 border-t pt-4">
            <NavItem
              to="/dashboard/settings"
              icon={<Settings className="h-4 w-4" />}
              label="Settings"
              active={location.pathname === "/dashboard/settings"}
            />
            <NavItem
              to="/logout"
              icon={<LogOut className="h-4 w-4" />}
              label="Sign out"
              active={location.pathname === "/logout"}
            />
          </div> */}
        </nav>



        {/* <div className="text-xs text-muted-foreground">
          Pro tip: Share your active campaign to boost visibility.
        </div> */}
      </aside>
    </>
  );

}
export default SideBar;



 