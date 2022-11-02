
import React from "react";
// import { CluodUpLoadIcon } from "react";
import Cyber from "./Images/cyber-bg.png";
import { AiFillBulb } from "react-icons/ai";
import { RiServerFill } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa";
import { TiWarning } from "react-icons/ti";


const hero = () =>{
    return(
        
        <div name="home" className=" w-full h-screen bg-zinc-200 flex flex-col justify-between">
            <div className="grid md:grid-cols-2 max-w-[1240px] m-auto ">
                <div className="flex flex-col justify-center md:items-start w-full px-2 py-8 ">
                    <p className="text-2xl">Unique Sequencing & Production</p>
                    <h1 className="py-3 text-5xl md:text-7xl font-bold ">Cloud Management</h1>
                    <p className="text-2xl">This is our brad</p>
                    <button className="py-3 px-6 sm:w-[60%] my-4">
                        Get Start 
                    </button>
                </div>
                
                <div>
                    <img className="w-full" src={Cyber} alt="cyberPic"/>
                </div>

                <div className=" absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl">   
                    <p>  Data Service </p>
                    <div className=" flex justify-between flex-wrap px-4">
                        <p className="flex px-4 py-2 text-slate-500"><AiFillBulb className="h-6 text-indigo-600 "/>  App Security</p>
                        <p className="flex px-4 py-2 text-slate-500"><FaDatabase className="h-6 text-indigo-600 "/> Dashboard Desing</p>
                        <p className="flex px-4 py-2 text-slate-500"> <RiServerFill className="h-6 text-indigo-600 "/>Cloud Data</p>
                        <p className="flex px-4 py-2 text-slate-500"><TiWarning className="h-6 text-indigo-600 "/>API</p>
                    </div> 
                </div>



            </div>
        </div>
        
        
    )
}

export default hero;