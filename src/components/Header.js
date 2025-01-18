import React from "react";
import Logo from "./Logo";
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="h-20 shadow-md bg-white">
            <div className="h-full flex items-center container mx-auto px-4 justify-between">
                <div className="">
                    <Link to={"/"}>
                        <Logo width={90} height={50} />
                    </Link>
                </div>

                <div className="hidden lg:flex w-full items-center justify-between max-w-sm border overflow-hidden border-gray-300 rounded-full focus-within:shadow">
                    <input type="text" className="w-full outline-none pl-4" placeholder="Search product here.." />
                    <div className="text-2xl min-w-[50px] h-8 bg-red-600 text-white flex items-center justify-center rounded-r-full">
                        <GrSearch />
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <div className="text-3xl cursor-pointer">
                        <FaRegCircleUser />
                    </div>
                    <div className="text-3xl cursor-pointer relative">
                        <span>
                            <FaShoppingCart />
                        </span>
                        <div className="bg-red-400 text-white w-5 h-5 p-1 flex items-center justify-center rounded-full absolute top-[-8px] right-[-5px]">
                            <p className="text-sm">0</p>
                        </div>
                    </div>
                    <div>
                        <Link
                            to={"/login"}
                            className="px-3 py-1 rounded-full text-xl bg-red-500 text-white hover:bg-red-800 hover:animate-[spin-slow]"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
