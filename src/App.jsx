
// /* eslint-disable react-hooks/immutability */
// /* eslint-disable react-hooks/set-state-in-effect */
// /* eslint-disable react-refresh/only-export-components */
// /* eslint-disable no-unused-vars */
// // App.jsx
// import React, { createContext, useState, useContext, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { motion } from "framer-motion";
// import "./App.css";

// // Material Icons
// import {
//   Home as HomeIcon,
//   Error as ErrorIcon,
//   AdminPanelSettings as AdminIcon,
//   Person as PersonIcon,
//   Logout as LogoutIcon,
//   Warning as WarningIcon,
//   CheckCircle as CheckCircleIcon,
// } from "@mui/icons-material";

// // Components
// import { Navbar } from "./components/navbar/Navbar";
// import { Gallery } from "./components/gallery/Gallery";
// import { Dashboard } from "./components/dashboard/Dashboard";
// import { GalleryManagement } from "./components/galleryDashboard/GalleryDashboard";
// import { Footer } from "./components/footer/Footer";

// // API Base URL
// const API_BASE_URL = "https://myalbumnode.onrender.com";

// // Create Auth Context
// const AuthContext = createContext(null);

// // Custom hook to use auth context
// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };

// // Auth Provider Component
// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [token, setToken] = useState(localStorage.getItem("token"));

//   useEffect(() => {
//     // Check for stored token on mount
//     const storedToken = localStorage.getItem("token");
//     const storedUser = localStorage.getItem("user");

//     if (storedToken && storedUser) {
//       setToken(storedToken);
//       setUser(JSON.parse(storedUser));

//       // Show welcome back toast
//       toast.info(
//         <div className="flex items-center gap-2">
//           <CheckCircleIcon className="text-green-400" />
//           <span>Welcome back, {JSON.parse(storedUser).email}!</span>
//         </div>,
//         {
//           icon: false,
//           style: {
//             background: "linear-gradient(135deg, #059669, #047857)",
//             color: "white",
//           },
//         },
//       );
//     }

//     setLoading(false);
//   }, []);

//   const login = async (email, password) => {
//     try {
//       // Show loading toast
//       toast.loading("Authenticating...", {
//         toastId: "login-loading",
//       });

//       // Make actual API call
//       const response = await fetch(`${API_BASE_URL}/auth/login`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (data.success) {
//         // Extract user data from the response structure
//         const userData = {
//           id: data.user._id,
//           email: data.user.email,
//           status: data.user.status,
//           role: data.user.status, // Using status as role
//           createdAt: data.user.createdAt,
//           updatedAt: data.user.updatedAt,
//         };

//         // Store token and user data
//         localStorage.setItem("token", data.token);
//         localStorage.setItem("user", JSON.stringify(userData));

//         setToken(data.token);
//         setUser(userData);

//         toast.dismiss("login-loading");
//         toast.success(
//           <div className="flex items-center gap-2">
//             {data.user.status === 'admin' ? (
//               <AdminIcon className="text-white" />
//             ) : (
//               <PersonIcon className="text-white" />
//             )}
//             <span>{data.message || "Login successful!"}</span>
//           </div>,
//           {
//             icon: false,
//             style: {
//               background: "linear-gradient(135deg, #10b981, #059669)",
//               color: "white",
//             },
//           },
//         );

//         return { success: true, user: userData };
//       } else {
//         toast.dismiss("login-loading");
//         toast.error(
//           <div className="flex items-center gap-2">
//             <WarningIcon className="text-white" />
//             <span>{data.message || "Invalid email or password"}</span>
//           </div>,
//           {
//             icon: false,
//             style: {
//               background: "linear-gradient(135deg, #ef4444, #dc2626)",
//               color: "white",
//             },
//           },
//         );
//         return { success: false, error: data.message || "Invalid credentials" };
//       }
//     } catch (error) {
//       toast.dismiss("login-loading");
//       toast.error(
//         <div className="flex items-center gap-2">
//           <WarningIcon className="text-white" />
//           <span>Network error. Please try again.</span>
//         </div>,
//         {
//           icon: false,
//           style: {
//             background: "linear-gradient(135deg, #ef4444, #dc2626)",
//             color: "white",
//           },
//         },
//       );
//       return { success: false, error: error.message };
//     }
//   };

//   const logout = () => {
//     // Animate logout
//     toast.info(
//       <div className="flex items-center gap-2">
//         <LogoutIcon className="text-white" />
//         <span>Logging out...</span>
//       </div>,
//       {
//         icon: false,
//         style: {
//           background: "linear-gradient(135deg, #f59e0b, #d97706)",
//           color: "white",
//         },
//         autoClose: 2000,
//       },
//     );

//     setTimeout(() => {
//       localStorage.removeItem("token");
//       localStorage.removeItem("user");
//       setToken(null);
//       setUser(null);

//       toast.success("Logged out successfully");
//     }, 1000);
//   };

//   const value = {
//     user,
//     token,
//     loading,
//     login,
//     logout,
//     isAuthenticated: !!token,
//     isAdmin: user?.status === "admin" || user?.role === "admin", // Check both status and role
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// // Private Route Component
// const PrivateRoute = ({ children }) => {
//   const { isAuthenticated, loading } = useAuth();
//   const navigate = useNavigate();

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//           className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full"
//         />
//       </div>
//     );
//   }

//   if (!isAuthenticated) {
//     navigate("/");
//     return null;
//   }

//   return children;
// };

// // Admin Route Component
// const AdminRoute = ({ children }) => {
//   const { isAdmin, loading } = useAuth();
//   const navigate = useNavigate();

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//           className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full"
//         />
//       </div>
//     );
//   }

//   if (!isAdmin) {
//     toast.error(
//       <div className="flex items-center gap-2">
//         <WarningIcon className="text-white" />
//         <span>Access denied. Admin privileges required.</span>
//       </div>,
//       {
//         icon: false,
//         style: {
//           background: "linear-gradient(135deg, #ef4444, #dc2626)",
//           color: "white",
//         },
//       },
//     );
//     navigate("/dashboard");
//     return null;
//   }

//   return children;
// };

// // 404 Not Found Component
// const NotFound = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="text-center max-w-md"
//       >
//         <motion.div
//           initial={{ scale: 0 }}
//           animate={{ scale: 1, rotate: 360 }}
//           transition={{ duration: 0.8, type: "spring" }}
//           className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mb-6 mx-auto"
//         >
//           <ErrorIcon className="text-white text-4xl sm:text-5xl" />
//         </motion.div>

//         <motion.h1
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
//         >
//           404
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//           className="text-lg sm:text-xl text-gray-300 mb-8"
//         >
//           Oops! The page you're looking for doesn't exist.
//         </motion.p>

//         <motion.button
//           onClick={() => navigate("/")}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
//         >
//           <HomeIcon />
//           <span>Back to Gallery</span>
//         </motion.button>
//       </motion.div>
//     </div>
//   );
// };

// // Main App Component
// export default function App() {
//   return (

//       <AuthProvider>
//         <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
//           <Navbar />

//           {/* Toast Container for notifications */}
//           <ToastContainer
//             position="top-right"
//             autoClose={3000}
//             hideProgressBar={false}
//             newestOnTop
//             closeOnClick
//             rtl={false}
//             pauseOnFocusLoss
//             draggable
//             pauseOnHover
//             theme="dark"
//             className="z-50"
//           />

//           {/* Routes */}
//           <Routes>
//             {/* Public Routes - Gallery is home */}
//             <Route path="/" element={<Gallery />} />
//             <Route path="/gallery" element={<Gallery />} />

//             {/* Protected Routes */}
//             <Route
//               path="/dashboard"
//               element={
//                 <PrivateRoute>
//                   <Dashboard />
//                 </PrivateRoute>
//               }
//             />

//             {/* Protected Admin Routes */}
//             <Route
//               path="/admin/management"
//               element={
//                 <PrivateRoute>
//                   <AdminRoute>
//                     <GalleryManagement />
//                   </AdminRoute>
//                 </PrivateRoute>
//               }
//             />

//             {/* 404 Route */}
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//           <Footer />
//         </div>
//       </AuthProvider>

//   );
// }
















/* eslint-disable react-hooks/immutability */
/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
// App.jsx
import React, { createContext, useState, useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import axios from "axios";
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

// API Base URL - Your existing backend
const API_BASE_URL = "https://myalbumnode.onrender.com";
const NODE_ENV = 'development';

// Create Auth Context
const AuthContext = createContext(null);

// IP Tracking function - Sends to your API without storing locally
const trackUserIP = async () => {
  try {
    // Check if already sent in this session (using sessionStorage only to prevent spam)
    const ipSent = sessionStorage.getItem("ipSent");
    if (ipSent) {
      // console.log("IP already sent in this session");
      return;
    }

    // Get user's IP address using free service
    let userIP = null;
    let locationData = null;
    
    try {
      // Try to get IP with location data
      const response = await axios.get('https://ipapi.co/json/', { timeout: 5000 });
      userIP = response.data.ip;
      locationData = {
        city: response.data.city,
        region: response.data.region,
        country: response.data.country_name,
        latitude: response.data.latitude,
        longitude: response.data.longitude,
        org: response.data.org,
        postal: response.data.postal,
        timezone: response.data.timezone
      };
    } catch (error) {
      // console.log("ipapi.co failed, trying backup...");
      
      // Fallback to simple IP only
      const ipResponse = await axios.get('https://api.ipify.org?format=json', { timeout: 5000 });
      userIP = ipResponse.data.ip;
    }

    if (!userIP) {
      // console.log("Could not get IP address");
      return;
    }

    // Get browser information
    const browserInfo = {
      userAgent: navigator.userAgent,
      language: navigator.language,
      platform: navigator.platform,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      referrer: document.referrer || 'direct',
      timestamp: new Date().toISOString(),
      page: window.location.pathname,
      href: window.location.href
    };

    // Prepare data to send
    const trackingData = {
      ip: userIP,
      ...(locationData && { location: locationData }),
      ...browserInfo
    };

    // Send to your API endpoint
    // You need to create this endpoint on your backend
    const response = await axios.post(`${API_BASE_URL}/api/track-visitor`, trackingData, {
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 8000 // 8 second timeout
    });

    if (response.status === 200 || response.status === 201) {
      // Mark as sent for this session only (prevents multiple sends in same session)
      sessionStorage.setItem("ipSent", "true");
      
      // console.log("✅ IP successfully sent to API:", userIP);
      
      // Optional: Show subtle success notification (can be removed)
      if (NODE_ENV === 'development') {
        toast.success(`📍 IP tracked: ${userIP}`, {
          autoClose: 2000,
          style: {
            background: "linear-gradient(135deg, #10b981, #059669)",
            color: "white",
          },
        });
      }
    }
  } catch (error) {
    // Log error but don't show to user
    // console.error("Failed to send IP to API:", error.message);
    
    // In development, show error for debugging
    if (NODE_ENV === 'development') {
      toast.error(`Failed to track IP: ${error.message}`, {
        autoClose: 3000,
      });
    }
    
    // Don't mark as sent if failed - will retry on next page load
  }
};

// Optional: Manual retry function for development
const retryIPSubmission = () => {
  sessionStorage.removeItem("ipSent");
  trackUserIP();
};

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
    // Track IP when the app loads
    trackUserIP();

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
          <span>Welcome back, {JSON.parse(storedUser).email}!</span>
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

      // Make actual API call
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        // Extract user data from the response structure
        const userData = {
          id: data.user._id,
          email: data.user.email,
          status: data.user.status,
          role: data.user.status, // Using status as role
          createdAt: data.user.createdAt,
          updatedAt: data.user.updatedAt,
        };

        // Store token and user data
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(userData));

        setToken(data.token);
        setUser(userData);

        toast.dismiss("login-loading");
        toast.success(
          <div className="flex items-center gap-2">
            {data.user.status === 'admin' ? (
              <AdminIcon className="text-white" />
            ) : (
              <PersonIcon className="text-white" />
            )}
            <span>{data.message || "Login successful!"}</span>
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
            <span>{data.message || "Invalid email or password"}</span>
          </div>,
          {
            icon: false,
            style: {
              background: "linear-gradient(135deg, #ef4444, #dc2626)",
              color: "white",
            },
          },
        );
        return { success: false, error: data.message || "Invalid credentials" };
      }
    } catch (error) {
      toast.dismiss("login-loading");
      toast.error(
        <div className="flex items-center gap-2">
          <WarningIcon className="text-white" />
          <span>Network error. Please try again.</span>
        </div>,
        {
          icon: false,
          style: {
            background: "linear-gradient(135deg, #ef4444, #dc2626)",
            color: "white",
          },
        },
      );
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
    isAdmin: user?.status === "admin" || user?.role === "admin", // Check both status and role
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Private Route Component
const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Track IP when accessing protected routes
    trackUserIP();
  }, []);

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
    navigate("/");
    return null;
  }

  return children;
};

// Admin Route Component
const AdminRoute = ({ children }) => {
  const { isAdmin, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Track IP when accessing admin routes
    trackUserIP();
  }, []);

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
    navigate("/dashboard");
    return null;
  }

  return children;
};

// 404 Not Found Component
const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Track IP when accessing 404 page
    trackUserIP();
  }, []);

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

        <motion.button
          onClick={() => navigate("/")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
        >
          <HomeIcon />
          <span>Back to Gallery</span>
        </motion.button>
      </motion.div>
    </div>
  );
};

// Development helper component
const DevTools = () => {
  
  if (NODE_ENV !== 'development') return null;
  
  return (
    <div className="fixed bottom-20 right-4 flex flex-col gap-2 z-50">
      <button
        onClick={retryIPSubmission}
        className="bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700"
        title="Retry IP Submission"
      >
        🔄
      </button>
    </div>
  );
};

// Main App Component
export default function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navbar />

        {/* Development tools - only shows in development */}
        <DevTools />

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

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          {/* Protected Admin Routes */}
          <Route
            path="/admin/management"
            element={
              <PrivateRoute>
                <AdminRoute>
                  <GalleryManagement />
                </AdminRoute>
              </PrivateRoute>
            }
          />

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
}