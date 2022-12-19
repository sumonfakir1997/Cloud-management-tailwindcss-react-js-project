import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const handelClose = () => setNav(!nav);

    return (
        <div className="w-screen h-20 z-10 bg-zinc-200 nabvar fixed drop-shadow-lg cursor-pointer ">
            <div className=" px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    <h1 className="text-3xl font-bold sm:text-4xl  mr-4">Brand</h1>
                    <ul className="hidden md:flex">
                        <li className="hover:bg-transparent hover:text-indigo-600 rounded-md">
                            <Link to="home" smooth={true} duration={500}>
                                Home{" "}
                            </Link>
                        </li>
                        <li className="hover:bg-transparent hover:text-indigo-600 rounded-md">
                            <Link to="about" smooth={true} offset={-200} duration={500}>
                                About{" "}
                            </Link>
                        </li>
                        <li className="hover:bg-transparent hover:text-indigo-600 rounded-md">
                            <Link to="support" smooth={true} offset={-50} duration={500}>
                                Support{" "}
                            </Link>
                        </li>
                        <li className="hover:bg-transparent hover:text-indigo-600 rounded-md">
                            <Link to="platforms" smooth={true} offset={-100} duration={500}>
                                Platforms{" "}
                            </Link>
                        </li>
                        <li className="hover:bg-transparent hover:text-indigo-600 rounded-md">
                            <Link to="pricing" smooth={true} offset={-50} duration={500}>
                                Pricing{" "}
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="hidden md:flex pr-4">
                    <button className="border-none bg-transparent text-black mr-4">
                        Sing In
                    </button>
                    <button className="px-8 py-3">Sing up</button>
                </div>
                <div className="md:hidden mr-8" onClick={handleClick}>
                    {!nav ? <HiMenu className="w-5" /> : <ImCross className="w-5" />}
                </div>
            </div>

            <div className="">
                <ul className={!nav ? "hidden" : " absolute bg-zinc-200 w-full px-8"}>
                    <li className="border-b-2 border-zinc-300 w-full hover:bg-transparent hover:text-indigo-600 rounded-md ">
                        <Link onClick={handelClose} to="home" smooth={true} duration={500}>
                            Home{" "}
                        </Link>
                    </li>

                    <li className="border-b-2 border-zinc-300 w-full hover:bg-transparent hover:text-indigo-600 rounded-md">
                        <Link
                            onClick={handelClose}
                            to="about"
                            smooth={true}
                            offset={-200}
                            duration={500}
                        >
                            About{" "}
                        </Link>
                    </li>

                    <li className="border-b-2 border-zinc-300 w-full hover:bg-transparent hover:text-indigo-600 rounded-md ">
                        <Link
                            onClick={handelClose}
                            to="support"
                            smooth={true}
                            offset={-50}
                            duration={500}
                        >
                            Support{" "}
                        </Link>
                    </li>

                    <li className="border-b-2 border-zinc-300 w-full hover:bg-transparent hover:text-indigo-600 rounded-md">
                        <Link
                            onClick={handelClose}
                            to="platforms"
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >
                            Platforms{" "}
                        </Link>
                    </li>

                    <li className="border-b-2 border-zinc-300 w-full hover:bg-transparent hover:text-indigo-600 rounded-md">
                        <Link
                            onClick={handelClose}
                            to="pricing"
                            smooth={true}
                            offset={-50}
                            duration={500}
                        >
                            Pricing{" "}
                        </Link>
                    </li>

                    <div className="flex flex-col my-4">
                        <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4 ">
                            Sing In
                        </button>
                        <button className="px-8 py-3">Sing Up</button>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
