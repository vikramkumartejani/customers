import Logo from "../assets/logo-website.svg";
import Profile from "../assets/profile.svg";
import Arrow from "../assets/arrow-down.svg";
const Header = () => {
  return (
    <header className="flex items-center justify-between w-full bg-white px-3 sm:px-10 pt-1.5 pb-5">
      <div className="md:p-4 p-1">
        <span className="flex md:w-[132px] w-[80px] md:h-[55px]">
          <img
            className="w-full h-full object-contain"
            width={"100%"}
            height={"100%"}
            src={Logo}
            alt="Logo"
          />
        </span>
      </div>
      <div className="flex items-center pe-2">
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
      </div>
    </header>
  );
};

export default Header;
