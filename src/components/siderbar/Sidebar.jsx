/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Dashboard as DashboardIcon,
  Collections as CollectionsIcon,
  Analytics as AnalyticsIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
  AdminPanelSettings as AdminPanelSettingsIcon,
  Dns as DnsIcon,
  ContactMail as ContactMailIcon,
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
} from "@mui/icons-material";

export const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    {
      id: "overview",
      label: "Overview",
      icon: <DashboardIcon />,
      path: "/dashboard",
    },
    {
      id: "admin",
      label: "Admin Management",
      icon: <AdminPanelSettingsIcon />,
      path: "/admin/management",
    },
    {
      id: "ip",
      label: "IP Management",
      icon: <DnsIcon />,
      path: "/ip/management",
    },
    {
      id: "contacts",
      label: "Contacts Management",
      icon: <ContactMailIcon />,
      path: "/contacts/management",
    },
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: sidebarOpen ? 0 : -300 }}
        className={`fixed top-0 left-0 h-full w-64 xsm:w-72 bg-gradient-to-b from-gray-900 to-gray-800 border-r border-purple-500/30 z-50 shadow-2xl`}
      >
        <div className="p-4 xsm:p-6">
          {/* Logo */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2 xsm:gap-3">
              <div className="w-8 h-8 xsm:w-10 xsm:h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                <DashboardIcon className="text-white text-lg xsm:text-xl" />
              </div>
              <h1 className="text-lg xsm:text-xl font-bold text-white">
                Gallery<span className="text-purple-400">Dash</span>
              </h1>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-gray-400 bg-gradient-to-t from-blue-500 to-indigo-500 lg:hidden"
            >
              <ChevronLeftIcon />
            </button>
          </div>

          {/* Navigation Menu */}
          <nav className="space-y-1 xsm:space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.path)}
                className={`w-full flex items-center gap-2 xsm:gap-3 px-3 xsm:px-4 py-2 xsm:py-3 rounded-lg transition-all text-sm xsm:text-base ${
                  isActive(item.path)
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg"
                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                }`}
              >
               
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Logout Button */}
          <div className="absolute bottom-6 left-6 right-6">
            <button
              onClick={() => {
                // Add your logout logic here
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                navigate("/");
              }}
              className="w-full flex items-center gap-2 xsm:gap-3 px-3 xsm:px-4 py-2 xsm:py-3 rounded-lg transition-all text-sm xsm:text-base text-gray-400 bg-gradient-to-t from-red-500 to-red-700"
            >
              <LogoutIcon className="text-base xsm:text-lg" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </motion.aside>

      {/* Mobile Menu Button - shown when sidebar is closed */}
      {!sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          className="fixed top-4 left-4 z-40 p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white lg:hidden"
        >
          <MenuIcon />
        </button>
      )}
    </>
  );
};
