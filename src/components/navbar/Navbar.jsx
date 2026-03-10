/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import LoginIcon from "@mui/icons-material/Login";
import SendIcon from "@mui/icons-material/Send";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import PhoneIcon from "@mui/icons-material/Phone";
import MessageIcon from "@mui/icons-material/Message";
import axios from "axios";
import { toast } from "react-toastify";
import logo from "../../assets/images/Leon.png";
import { Close } from "@mui/icons-material";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  // Form states
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  // Loading states
  const [contactLoading, setContactLoading] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);

  // API endpoints (replace with your actual endpoints)
  const API_BASE_URL = "https://myalbumnode.onrender.com";

  // Handle contact form submission
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setContactLoading(true);

    try {
      const response = await axios.post(
        `${API_BASE_URL}/contacts`,
        contactForm,
      );

      if (response.data.success) {
        toast.success(
          "Message sent successfully! We'll get back to you soon.",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          },
        );
        setContactForm({ name: "", email: "", message: "" });
        setShowContactModal(false);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to send message. Please try again.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        },
      );
    } finally {
      setContactLoading(false);
    }
  };

  // Handle login form submission
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoginLoading(true);

    try {
      const response = await axios.post(
        `${API_BASE_URL}/auth/login`,
        loginForm,
      );

      if (response.data.success) {
        toast.success("Login successful! Welcome back!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        // Store token if needed
        localStorage.setItem("token", response.data.token);
        setLoginForm({ email: "", password: "" });
        setShowLoginModal(false);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Login failed. Please check your credentials.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        },
      );
    } finally {
      setLoginLoading(false);
    }
  };

  // Navbar animation variants
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  // Mobile menu animation variants
  const menuVariants = {
    closed: {
      x: "100%",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    open: {
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  // Modal animation variants
  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 25 },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: { duration: 0.2 },
    },
  };

  // Overlay animation variants
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <>
      {/* Navbar */}
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className="fixed top-0 left-0 w-full z-50 bg-gradient-to-br from-gray-900 to-gray-900 backdrop-blur-lg bg-opacity-90 shadow-2xl"
      >
        <div className="max-w-7xl mx-auto px-4 xsm:px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 xsm:h-14 sm:h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0"
            >
              <Link to="/" className="flex items-center space-x-2">
                <img src={logo} alt="" className="w-24 h-20" />
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowContactModal(true)}
                className="flex items-center bg-gradient-to-t from-blue-500 to-indigo-500 space-x-2 px-4 py-2 rounded-lg text-white font-medium transition-all duration-300"
              >
                <ContactMailIcon className="text-lg" />
                <span>Contact</span>
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowLoginModal(true)}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-t from-red-400 to-red-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <LoginIcon className="text-lg" />
                <span>Login</span>
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-2 rounded-lg bg-gradient-to-t from-blue-400 to-indigo-400 transition-all duration-300"
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-16 right-0 w-full xsm:w-64 sm:w-72 h-screen bg-gradient-to-b from-purple-600 to-pink-600 md:hidden shadow-2xl"
            >
              <div className="flex flex-col p-4 space-y-3">
                <motion.button
                  whileHover={{ x: 10 }}
                  onClick={() => {
                    setShowContactModal(true);
                    setIsOpen(false);
                  }}
                  className="flex items-center space-x-3 px-4 py-3 text-white hover:bg-white hover:bg-opacity-20 rounded-lg transition-all duration-300 w-full"
                >
                  <ContactMailIcon />
                  <span className="text-base xsm:text-sm sm:text-base">
                    Contact
                  </span>
                </motion.button>

                <motion.button
                  whileHover={{ x: 10 }}
                  onClick={() => {
                    setShowLoginModal(true);
                    setIsOpen(false);
                  }}
                  className="flex items-center space-x-3 px-4 py-3 bg-white text-purple-600 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full"
                >
                  <LoginIcon />
                  <span className="text-base xsm:text-sm sm:text-base">
                    Login
                  </span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Contact Modal */}
      <AnimatePresence>
        {showContactModal && (
          <>
            {/* Overlay */}
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setShowContactModal(false)}
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95%] xsm:w-96 sm:w-[400px] md:w-[450px] lg:w-[500px] bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-2xl z-50 p-4 xsm:p-5 sm:p-6"
            >
              <div className="flex justify-between items-center mb-4 xsm:mb-3 sm:mb-4">
                <h2 className="text-xl xsm:text-lg sm:text-xl lg:text-2xl font-bold text-white flex items-center">
                  <ContactMailIcon className="mr-2 text-2xl" />
                  Contact Us
                </h2>
                <motion.button
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowContactModal(false)}
                  className="text-white bg-gradient-to-t from-red-500 to-red-700 hover:bg-opacity-20 rounded-lg p-1"
                >
                  <Close />
                </motion.button>
              </div>

              <form
                onSubmit={handleContactSubmit}
                className="space-y-4 xsm:space-y-3 text-black sm:space-y-4"
              >
                <div>
                  <label className="block text-white text-sm xsm:text-xs sm:text-sm mb-1 flex items-center">
                    <PersonIcon className="mr-1 text-sm" /> Name
                  </label>
                  <input
                    type="text"
                    value={contactForm.name}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, name: e.target.value })
                    }
                    className="w-full px-3 xsm:px-2 sm:px-3 py-2 xsm:py-1.5 sm:py-2 rounded-lg bg-white bg-opacity-20 text-black placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300 text-sm xsm:text-xs sm:text-sm"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white text-sm xsm:text-xs sm:text-sm mb-1 flex items-center">
                    <EmailIcon className="mr-1 text-sm" /> Email
                  </label>
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, email: e.target.value })
                    }
                    className="w-full px-3 xsm:px-2 sm:px-3 py-2 xsm:py-1.5 sm:py-2 rounded-lg bg-white bg-opacity-20 text-black placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300 text-sm xsm:text-xs sm:text-sm"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white text-sm xsm:text-xs sm:text-sm mb-1 flex items-center">
                    <MessageIcon className="mr-1 text-sm" /> Message
                  </label>
                  <textarea
                    value={contactForm.message}
                    onChange={(e) =>
                      setContactForm({
                        ...contactForm,
                        message: e.target.value,
                      })
                    }
                    rows="4"
                    className="w-full px-3 xsm:px-2 sm:px-3 py-2 xsm:py-1.5 sm:py-2 rounded-lg bg-white bg-opacity-20 text-black placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300 text-sm xsm:text-xs sm:text-sm resize-none"
                    placeholder="Enter your message"
                    required
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={contactLoading}
                  className="w-full bg-white text-purple-600 py-2 xsm:py-1.5 sm:py-2 rounded-lg font-bold text-sm xsm:text-xs sm:text-sm hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {contactLoading ? (
                    <div className="w-5 h-5 border-2 border-purple-600 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <SendIcon className="text-sm" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Login Modal */}
      <AnimatePresence>
        {showLoginModal && (
          <>
            {/* Overlay */}
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setShowLoginModal(false)}
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95%] xsm:w-96 sm:w-[400px] md:w-[450px] lg:w-[500px] bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-2xl z-50 p-4 xsm:p-5 sm:p-6"
            >
              <div className="flex justify-between items-center mb-4 xsm:mb-3 sm:mb-4">
                <h2 className="text-xl xsm:text-lg sm:text-xl lg:text-2xl font-bold text-white flex items-center">
                  <LoginIcon className="mr-2 text-2xl" />
                  Login
                </h2>
                <motion.button
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowLoginModal(false)}
                  className="text-white bg-gradient-to-t from-red-500 to-red-700 hover:bg-opacity-20 rounded-lg p-1"
                >
                  <Close />
                </motion.button>
              </div>

              <form
                onSubmit={handleLoginSubmit}
                className="space-y-4 xsm:space-y-3 text-black sm:space-y-4"
              >
                <div>
                  <label className="block text-white text-sm xsm:text-xs sm:text-sm mb-1 flex items-center">
                    <EmailIcon className="mr-1 text-sm" /> Email
                  </label>
                  <input
                    type="email"
                    value={loginForm.email}
                    onChange={(e) =>
                      setLoginForm({ ...loginForm, email: e.target.value })
                    }
                    className="w-full px-3 xsm:px-2 sm:px-3 py-2 xsm:py-1.5 sm:py-2 rounded-lg bg-white bg-opacity-20 text-black placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300 text-sm xsm:text-xs sm:text-sm"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white text-sm xsm:text-xs sm:text-sm mb-1 flex items-center">
                    <LockIcon className="mr-1 text-sm" /> Password
                  </label>
                  <input
                    type="password"
                    value={loginForm.password}
                    onChange={(e) =>
                      setLoginForm({ ...loginForm, password: e.target.value })
                    }
                    className="w-full px-3 xsm:px-2 sm:px-3 py-2 xsm:py-1.5 sm:py-2 rounded-lg bg-white bg-opacity-20 text-black placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300 text-sm xsm:text-xs sm:text-sm"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <div className="flex items-center justify-between text-sm xsm:text-xs sm:text-sm">
                  <label className="flex items-center text-white">
                    <input
                      type="checkbox"
                      className="mr-2 rounded bg-white bg-opacity-20"
                    />
                    Remember me
                  </label>
                  <a href="#" className="text-white hover:underline">
                    Forgot password?
                  </a>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loginLoading}
                  className="w-full bg-white text-purple-600 py-2 xsm:py-1.5 sm:py-2 rounded-lg font-bold text-sm xsm:text-xs sm:text-sm hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loginLoading ? (
                    <div className="w-5 h-5 border-2 border-purple-600 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <LoginIcon className="text-sm" />
                      <span>Login</span>
                    </>
                  )}
                </motion.button>

                <p className="text-center text-white text-sm xsm:text-xs sm:text-sm">
                  Don't have an account?{" "}
                  <a className="font-bold hover:underline">
                    Sign up
                  </a>
                </p>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
