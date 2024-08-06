import Logo from '../assets/logo-website.svg'
import Profile from '../assets/profile.svg'
import Arrow from '../assets/arrow-down.svg'
const Header = () => {
    return (
        <header className="flex items-center justify-between bg-white px-3 sm:px-10 pt-1.5 pb-5">
            <div className="p-4">
                <img src={Logo} alt="Logo" width={132} height={55} />
            </div>
            <div className="flex items-center">
                <img src={Profile} alt='Profile' />
                <div className="ml-3">
                    <p className="text-[#121212] text-sm font-medium">Alex Elvish</p>
                    <p className="text-[#12121299] text-sm">Admin</p>
                </div>
                <img src={Arrow} alt="arrow-down" className='ml-8 cursor-pointer'/>
            </div>
        </header>
    );
};

export default Header;
