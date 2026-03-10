/* eslint-disable react-hooks/immutability */
/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
// App.jsx
import React, { createContext, useState, useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import "./App.css";

// Material Icons
import {
  Home as HomeIcon,
  Error as ErrorIcon,
  AdminPanelSettings as AdminIcon,
  Person as PersonIcon,
  Logout as LogoutIcon,
  Warning as WarningIcon,
  CheckCircle as CheckCircleIcon,
} from "@mui/icons-material";

// Components
import { Navbar } from "./components/navbar/Navbar";
import { Gallery } from "./components/gallery/Gallery";
import { Dashboard } from "./components/dashboard/Dashboard";
import { GalleryManagement } from "./components/galleryDashboard/GalleryDashboard";
import { Footer } from "./components/footer/Footer";

// Create Auth Context
const AuthContext = createContext(null);

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// Auth Provider Component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    // Check for stored token on mount
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));

      // Show welcome back toast
      toast.info(
        <div className="flex items-center gap-2">
          <CheckCircleIcon className="text-green-400" />
          <span>Welcome back, {JSON.parse(storedUser).name}!</span>
        </div>,
        {
          icon: false,
          style: {
            background: "linear-gradient(135deg, #059669, #047857)",
            color: "white",
          },
        },
      );
    }

    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      // Show loading toast
      toast.loading("Authenticating...", {
        toastId: "login-loading",
      });

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Demo credentials
      if (email === "admin@gallery.com" && password === "admin123") {
        const userData = {
          id: 1,
          name: "Admin User",
          email: "admin@gallery.com",
          role: "admin",
          avatar: `https://i.pravatar.cc/150?u=${Date.now()}`,
          lastLogin: new Date().toISOString(),
        };

        const authToken =
          "token-" + Math.random().toString(36).substr(2) + Date.now();

        localStorage.setItem("token", authToken);
        localStorage.setItem("user", JSON.stringify(userData));

        setToken(authToken);
        setUser(userData);

        toast.dismiss("login-loading");
        toast.success(
          <div className="flex items-center gap-2">
            <AdminIcon className="text-white" />
            <span>Login successful! Welcome to admin dashboard.</span>
          </div>,
          {
            icon: false,
            style: {
              background: "linear-gradient(135deg, #10b981, #059669)",
              color: "white",
            },
          },
        );

        return { success: true, user: userData };
      } else {
        toast.dismiss("login-loading");
        toast.error(
          <div className="flex items-center gap-2">
            <WarningIcon className="text-white" />
            <span>Invalid email or password</span>
          </div>,
          {
            icon: false,
            style: {
              background: "linear-gradient(135deg, #ef4444, #dc2626)",
              color: "white",
            },
          },
        );
        return { success: false, error: "Invalid credentials" };
      }
    } catch (error) {
      toast.dismiss("login-loading");
      toast.error("Login failed");
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    // Animate logout
    toast.info(
      <div className="flex items-center gap-2">
        <LogoutIcon className="text-white" />
        <span>Logging out...</span>
      </div>,
      {
        icon: false,
        style: {
          background: "linear-gradient(135deg, #f59e0b, #d97706)",
          color: "white",
        },
        autoClose: 2000,
      },
    );

    setTimeout(() => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setToken(null);
      setUser(null);

      toast.success("Logged out successfully");
    }, 1000);
  };

  const value = {
    user,
    token,
    loading,
    login,
    logout,
    isAuthenticated: !!token,
    isAdmin: user?.role === "admin",
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Private Route Component
const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (!isAuthenticated) {
    window.location.href = "/";
    return null;
  }

  return children;
};

// Admin Route Component
const AdminRoute = ({ children }) => {
  const { isAdmin, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (!isAdmin) {
    toast.error(
      <div className="flex items-center gap-2">
        <WarningIcon className="text-white" />
        <span>Access denied. Admin privileges required.</span>
      </div>,
      {
        icon: false,
        style: {
          background: "linear-gradient(135deg, #ef4444, #dc2626)",
          color: "white",
        },
      },
    );
    window.location.href = "/";
    return null;
  }

  return children;
};

// 404 Not Found Component
const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mb-6 mx-auto"
        >
          <ErrorIcon className="text-white text-4xl sm:text-5xl" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
        >
          404
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg sm:text-xl text-gray-300 mb-8"
        >
          Oops! The page you're looking for doesn't exist.
        </motion.p>

        <motion.a
          href="/"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
        >
          <HomeIcon />
          <span>Back to Gallery</span>
        </motion.a>
      </motion.div>
    </div>
  );
};

// Main App Component
export default function App() {
  return (
    <>
      <AuthProvider>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <Navbar />

          {/* Toast Container for notifications */}
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            className="z-50"
          />

          {/* Routes */}
          <Routes>
            {/* Public Routes - Gallery is home */}
            <Route path="/" element={<Gallery />} />
            <Route path="/gallery" element={<Gallery />} />

            {/* Protected Admin Routes */}
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <AdminRoute>
                    <Dashboard />
                  </AdminRoute>
                </PrivateRoute>
              }
            />

            <Route
              path="/admin/management"
              element={
                // <PrivateRoute>
                //   <AdminRoute>
                    <GalleryManagement />
                //   </AdminRoute>
                // </PrivateRoute>
              }
            />

            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </AuthProvider>
    </>
  );
}
