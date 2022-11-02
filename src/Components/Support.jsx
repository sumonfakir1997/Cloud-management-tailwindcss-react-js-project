import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { SiMediamarkt } from "react-icons/si";
import { BiWorld } from "react-icons/bi";
import Support from "./Images/support.jpg";

const support = () => {
    return (
        <div name ="support" className="w-full mt-24">
            <div className="w-full h-[700px] bg-gray-900/90 absolute">
                <img className="w-full h-full object-cover mix-blend-overlay" src={Support} alt="/" />
            </div>

            <div className="max-w-[1240px] mx-auto text-white relative">
                <div className="px-4 py-12">
                    <h2 className="pt-8 text-3xl text-slate-300 uppercase text-center  ">Support</h2>
                    <h3 className="text-5xl font-bold py-6 text-center">Finding the right team </h3>
                    <p className="py-4 text-3xl text-slate-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aspernatur a doloribus nisi explicabo temporibus quos, odio libero delectus. Voluptas assumenda accusamus impedit nostrum alias pariatur inventore, dolor magni molestiae!</p>
                </div>
                {/*  mt-[20px] bg-indigo-600 text-white w-16 p-4 */}
                <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
                    <div className=" bg-white rounded-xl shadow-2xl">
                        <div className="p-8 py-4 kaj kore na ">
                            <div className="">
                            <FaPhoneAlt color="" size="1.5rem" className="text-indigo-600 " />
                            </div>
                            <h3 className="font-bold text-2xl my-6">sales</h3>
                            <p className=" text-gray-600 text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste fuga libero iure itaque nostrum numquam iusto deserunt id nesciunt dicta.</p>
                        </div>
                        <div className=" bg-slate-100 pl-4 py-4">
                            <p className=" flex items-center text-indigo-600 ">Contact Us<FaArrowRight className="w-10  " /></p>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className=" bg-white rounded-xl shadow-2xl">
                        <div className="p-4">
                            {/*size="2rem" className="bg-indigo-600  */}
                            <BiWorld color="" className="text-indigo-600 " size="2.5rem" />
                            <h3 className="font-bold text-2xl my-6">Technical Support </h3>
                            <p className=" text-gray-600 text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste fuga libero iure itaque nostrum numquam iusto deserunt id nesciunt dicta.</p>
                        </div>
                        <div className=" bg-slate-100 pl-4 py-4">
                            <p className=" flex items-center text-indigo-600">Contact Us<FaArrowRight className="w-10" /></p>
                        </div>
                    </div>
                    {/* 3 */}
                    <div className=" bg-white rounded-xl shadow-2xl">
                        <div className="p-4">
                            <SiMediamarkt color="" className="text-indigo-600 " size="2rem" />
                            <h3 className="font-bold text-2xl my-6">Media Inquirler </h3>
                            <p className=" text-gray-600 text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste fuga libero iure itaque nostrum numquam iusto deserunt id nesciunt dicta.</p>
                        </div>
                        <div className=" bg-slate-100 pl-4 py-4">
                            <p className=" flex items-center text-indigo-600">Contact Us<FaArrowRight className="w-10  " /></p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
export default support;