import React, { useState } from "react";
import { IoIosArrowDown, IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="h-16 z-50 backdrop-blur-2xl bg-transparent flex items-center sticky top-[24px] mx-auto rounded-2xl w-[90%] border-[1px] border-[#0000001A]">
            <div className="lg:px-4 sm:px-2 md:px-3 px-2 w-full flex justify-between items-center">
                <a href="/">
                    <img src="/logo.png" alt=""/>
                </a>
                <ul
                    className={`flex sm:gap-6 md:gap-1 lg:gap-6 gap-4 sm:items-center sm:mt-1 sm:pt-0 pt-3 text-[#333132] font-normal sm:static absolute left-0 top-[62px] ${navbarOpen ? "h-fit sm:pb-0 pb-5 bg-white" : "h-0 overflow-hidden"
                        }  transition-all duration-100 sm:h-fit sm:bg-none bg-transparent sm:w-fit w-full sm:flex-row flex-col px-4 sm:px-0`}
                >
                    <li className="hover:text-btnColor font-[500]  transition-all duration-150">
                        <a href="/">
                            <span className="flex justify-center items-center gap-1.5">Products <IoIosArrowDown /> </span>
                        </a>
                    </li>


                    <li className="hover:text-btnColor font-[500]  transition-all duration-150">
                        <a href="/">
                        <span className="flex justify-center items-center gap-1.5">Customers <IoIosArrowDown /> </span>
                        </a>
                    </li>

                    <li className="hover:text-btnColor font-[500]  transition-all duration-150">
                        <a href="/">
                        <span className="flex justify-center items-center gap-1.5">Resources <IoIosArrowDown /> </span>
                        </a>
                    </li>

                    <li className="hover:text-btnColor font-[500]  transition-all duration-150">
                        <a href="/">
                        <span className="flex justify-center items-center gap-1.5">About us <IoIosArrowDown /> </span>
                        </a>
                    </li>

                    <li className="hover:text-btnColor font-[500] text-center  transition-all duration-150">
                        <a href="/">
                        Plans
                        </a>
                    </li>

                    <li className="hover:text-btnColor bg-[#E4875D1A] text-[#E4875D] px-4 py-2 rounded-lg font-[500]  transition-all duration-150 text-center">
                        <a href="/">
                            Login
                        </a>
                    </li>

                    <li className="hover:text-btnColor bg-[#E4875D] text-white py-2 px-4 rounded-lg font-[500]  transition-all duration-150 text-center">
                        <a href="/">
                            Request Demo
                        </a>
                    </li>

                </ul>
                <button
                    onClick={() => setNavbarOpen(!navbarOpen)}
                    className="sm:hidden flex items-center justify-center sm:mt-0 mt-2"
                >
                    {navbarOpen ? (
                        <RxCross2 className="text-gray-900 text-3xl" />
                    ) : (
                        <IoIosMenu className="text-gray-900 text-3xl" />
                    )}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;