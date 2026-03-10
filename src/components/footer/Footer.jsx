import React from "react";
import {
  CameraAlt,
  Favorite,
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  Email,
  Phone,
  LocationOn,
  Copyright,
  GitHub,
  Language,
  EmojiEvents,
  Person,
  AutoAwesome,
  ArrowForward,
  MenuBook,
  PhotoLibrary,
  Place,
  CalendarToday,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-white text-sm">
            <Copyright fontSize="small" />
            <span>{currentYear} Leon.</span>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-400">
              <EmojiEvents className="text-yellow-500" fontSize="small" />
              <span className="text-sm">Award Winning</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <PhotoLibrary className="text-blue-500" fontSize="small" />
              <span className="text-sm">3+ Albums</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Person className="text-green-500" fontSize="small" />
              <span className="text-sm">5+ Photographers</span>
            </div>
          </div>

          <div className="flex space-x-4 text-sm text-gray-400">
            <a className="hover:text-white transition-colors duration-300">
              Privacy
            </a>
            <a className="hover:text-white transition-colors duration-300">
              Terms
            </a>
            <a className="hover:text-white transition-colors duration-300">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
