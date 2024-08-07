import { NavLink } from "react-router-dom";
import Logout from "../assets/logout.svg";
import DashboardIcon from "../assets/dashboard.svg";
import CustomerIcon from "../assets/customer.svg";
import SettingsIcon from "../assets/settings.svg";

const Sidebar = () => {
  return (
    <div className="sidebar text-[#12121299] sticky top-0 min-h-full bg-white min-w-fit w-fit lg:max-w-[319px] md:w-[250px] max-w-auto flex flex-col rounded-[24px] px-3 xl:px-8 md:px-6 pt-8">
      <h3 className="text-[#121212] text-[14px] leading-[18.2px] font-medium font-ibmplexsans">
        Menu
      </h3>
      <div className="flex-1 pt-9">
        <div className="flex flex-col gap-8">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `transition duration-200 flex items-center md:gap-5 text-[18px] leading-[27px] font-medium ${
                isActive ? "text-[#6100A2]" : "text-[#6C6A6E]"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <img
                  src={DashboardIcon}
                  alt="Dashboard"
                  className={isActive ? "filter-active" : "filter-none"}
                />
                <span className="md:flex hidden">Dashboard</span>
              </>
            )}
          </NavLink>
          <NavLink
            to="/customer"
            className={({ isActive }) =>
              `transition duration-200 flex items-center md:gap-5 text-[18px] leading-[27px] font-medium ${
                isActive ? "text-[#6100A2]" : "text-[#6C6A6E]"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <img
                  src={CustomerIcon}
                  alt="Customer"
                  className={isActive ? "filter-active" : "filter-grayscale"}
                />
                <span className="md:flex hidden">Customer</span>
              </>
            )}
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `transition duration-200 flex items-center md:gap-5 text-[18px] leading-[27px] font-medium ${
                isActive ? "text-[#6100A2]" : "text-[#6C6A6E]"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <img
                  src={SettingsIcon}
                  alt="Settings"
                  className={isActive ? "filter-active" : "filter-none"}
                />
                <span className="md:flex hidden">Settings</span>
              </>
            )}
          </NavLink>
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
