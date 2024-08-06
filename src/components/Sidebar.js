import { useState } from "react";
import Logout from "../assets/logout.svg";
import Dashboard from "../assets/dashboard.svg";
import Customer from "../assets/customer.svg";
import Settings from "../assets/settings.svg";

const Sidebar = () => {
  const [active, setActive] = useState("Customer");

  const handleSetActive = (name) => {
    setActive(name);
  };

  return (
    <div className="sidebar text-[#12121299] sticky top-0 min-h-full bg-white min-w-fit w-fit lg:max-w-[319px] md:w-[250px] max-w-auto   flex flex-col rounded-[24px] px-3 xl:px-8 md:px-6 pt-8">
      <h3 className="text-[#121212] text-[14px] leading-[18.2px] font-medium font-ibmplexsans">
        Menu
      </h3>
      <div className="flex-1 pt-9">
        <div className="flex flex-col gap-8">
          <button
            className={`transition duration-200 flex items-center md:gap-5 text-[#6C6A6E] text-[18px] leading-[27px] font-medium ${
              active === "Dashboard" ? "" : ""
            }`}
            onClick={() => handleSetActive("Dashboard")}
          >
            <img src={Dashboard} alt="Dashboard" />
            <span className="md:flex hidden">Dashboard</span>
          </button>
          <button
            className={`transition duration-200 flex items-center md:gap-5 text-[18px] leading-[27px] font-medium text-[#6100A2] ${
              active === "Dashboard" ? "" : ""
            }`}
            onClick={() => handleSetActive("Dashboard")}
          >
            <img src={Customer} alt="Customer" />
            <span className="md:flex hidden">Customer</span>
          </button>
          <button
            className={`transition duration-200 flex items-center md:gap-5 text-[#6C6A6E] text-[18px] leading-[27px] font-medium ${
              active === "Dashboard" ? "" : ""
            }`}
            onClick={() => handleSetActive("Dashboard")}
          >
            <img src={Settings} alt="Settings" />
            <span className="md:flex hidden">Settings</span>
          </button>
        </div>
      </div>
      <div className="pb-8 flex items-center md:gap-5 cursor-pointer">
        <img src={Logout} alt="logout" />
        <h3 className="text-[#FB656A] text-[18px] leading-[27px] tracking-[0.01em] font-medium">
          <span className="md:flex hidden">Logout</span>
        </h3>
      </div>
    </div>
  );
};

export default Sidebar;

