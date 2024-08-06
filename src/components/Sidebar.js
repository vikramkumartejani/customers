import { useState } from 'react';
import Logout from '../assets/logout.svg'
import Dashboard from '../assets/dashboard.svg'
import Customer from '../assets/customer.svg'
import Settings from '../assets/settings.svg'

const Sidebar = () => {
    const [active, setActive] = useState('Customer');

    const handleSetActive = (name) => {
        setActive(name);
    };

    return (
        <div className="text-[#12121299] bg-white w-full max-w-[319px] min-h-screen hidden xl:flex flex-col rounded-[24px] px-3 sm:px-8 pt-8">
            <h3 className='text-[#121212] text-[14px] leading-[18.2px] font-medium font-ibmplexsans'>Menu</h3>
            <div className="flex-1 pt-9">
                <div className='flex flex-col gap-8'>
                    <button
                        className={`transition duration-200 flex items-center gap-5 text-[#6C6A6E] text-[18px] leading-[27px] font-medium ${active === 'Dashboard' ? '' : ''}`}
                        onClick={() => handleSetActive('Dashboard')}
                    >
                        <img src={Dashboard} alt='Dashboard' />
                        Dashboard
                    </button>
                    <button
                        className={`transition duration-200 flex items-center gap-5 text-[18px] leading-[27px] font-medium text-[#6100A2] ${active === 'Dashboard' ? '' : ''}`}
                        onClick={() => handleSetActive('Dashboard')}
                    >
                        <img src={Customer} alt='Customer' />
                        Customer
                    </button>
                    <button
                        className={`transition duration-200 flex items-center gap-5 text-[#6C6A6E] text-[18px] leading-[27px] font-medium ${active === 'Dashboard' ? '' : ''}`}
                        onClick={() => handleSetActive('Dashboard')}
                    >
                        <img src={Settings} alt='Settings' />
                        Settings
                    </button>
                </div>
            </div>
            <div className="pb-8 flex items-center gap-5 cursor-pointer">
                <img src={Logout} alt='logout' />
                <h3 className='text-[#FB656A] text-[18px] leading-[27px] tracking-[0.01em] font-medium'>Logout</h3>
            </div>
        </div>
    );
};

export default Sidebar;
