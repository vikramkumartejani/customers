import React, { useState, useEffect, useRef } from "react";
import Profile from "../assets/profile.svg";
import Arrow from "../assets/arrow-down.svg";
import Logout from "../assets/logout.svg";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="flex items-center justify-between w-full bg-white px-3 sm:px-10 pt-4 pb-4">
      <div className="md:p-4 p-1">
        <h1 className="text-xl sm:text-3xl text-[#121212] font-semibold uppercase">
          Ceelcadde
        </h1>
      </div>
      <div
        className="relative profile-dropdown flex items-center pe-2"
        onClick={handleDropdownToggle}
        ref={dropdownRef}
      >
        <img src={Profile} alt="Profile" />
        <div className="md:ml-3 ml-2">
          <p className="text-[#121212] text-sm font-medium">Alex Elvish</p>
          <p className="text-[#12121299] text-sm">Admin</p>
        </div>
        <img
          src={Arrow}
          alt="arrow-down"
          className="md:ml-8 ml-2 cursor-pointer"
        />
        {dropdownOpen && (
          <div className="absolute right-0 md:w-full w-[97%] top-full mt-2 w-48 bg-white border rounded-lg shadow-lg py-2 z-50">
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200 md:text-[16px] text-[15px]"
            >
              Invite Users
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex gap-[6px] justify-between"
            >
              <h3 className="text-[#FB656A] md:text-[16px] text-[15px]">
                <span>Logout</span>
              </h3>
              <img width={24} src={Logout} alt="logout" />
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
