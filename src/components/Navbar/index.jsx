import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

import { FaHome, FaLanguage, FaBookmark } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import {
  IoIosNotifications,
  IoMdSettings,
  IoIosHelpCircle,
  IoMdLogOut,
} from "react-icons/io";

const navItems = [
  {
    title: "Home",
    link: "main",
    icon: <FaHome />,
  },
  {
    title: "Profile",
    link: "main",
    icon: <CgProfile />,
  },
  {
    title: "Language",
    link: "main",
    icon: <FaLanguage />,
  },
  {
    title: "Notifications",
    link: "main",
    icon: <IoIosNotifications />,
  },
  {
    title: "Bookmarks",
    link: "main",
    icon: <FaBookmark />,
  },
  {
    title: "Settings",
    link: "main",
    icon: <IoMdSettings />,
  },
  {
    title: "Help",
    link: "main",
    icon: <IoIosHelpCircle />,
  },
  // {
  //   title: "Log Out",
  //   link: "home",
  //   icon: <IoMdLogOut />,
  // },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking on a link or when resizing to larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        {/* Logo or brand name */}
        <a href="/main" className="navbar-logo">
          <img src="/images/logo.svg" />
        </a>

        {/* Mobile menu button */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation links */}
        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          {navItems.map((navItem) => (
            <li className="nav-item">
              <a href={navItem.link} className="nav-links" onClick={toggleMenu}>
                <span>{navItem.icon}</span>
                <span>{navItem.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
