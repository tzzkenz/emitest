import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHouse,
  faBriefcase,
  faPuzzlePiece,
  faComments,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo-blue.svg";

const Navbar = () => {
  const [selectedTab, setSelectedTab] = useState("Home");

  const navItems = [
    { icon: faHouse, label: "Home" },
    { icon: faBriefcase, label: "Work" },
    { icon: faPuzzlePiece, label: "Skills" },
    { icon: faComments, label: "Messages" },
    { icon: faUserCircle, label: "Profile" },
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex items-center">
            <img src={logo} alt="logo" className="h-8 sm:h-10" />
            <div className="text-lg sm:text-xl font-semibold px-2 sm:px-4">
              Emigrate
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-8">
            <div className="relative w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search..."
                className="w-full sm:w-auto pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="w-4 h-4 text-gray-400"
                />
              </div>
            </div>
            <nav className="flex space-x-4 sm:space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className={`flex flex-col items-center cursor-pointer transition-colors duration-200 ${
                    selectedTab === item.label
                      ? "text-emigrate-blue"
                      : "text-gray-600 hover:text-emigrate-blue"
                  }`}
                  onClick={() => setSelectedTab(item.label)}
                >
                  <a className="flex items-center">
                    <FontAwesomeIcon
                      icon={item.icon}
                      className={`w-5 h-5 sm:w-6 sm:h-6 ${
                        selectedTab === item.label
                          ? "text-emigrate-blue"
                          : "text-gray-400"
                      }`}
                    />
                  </a>
                  <span className="text-xs sm:text-sm mt-1">{item.label}</span>
                  {selectedTab === item.label && (
                    <div className="h-0.5 w-full bg-blue-500 mt-1"></div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
