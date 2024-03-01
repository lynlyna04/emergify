import React from 'react'
import { IoIosWarning } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { CiLogout } from "react-icons/ci";

const Police = () => {
    return (
        <div>
           <aside class="flex flex-col w-[270px] h-screen px-4 py-8 overflow-y-auto bg-white border-r border-main rtl:border-r-0 rtl:border-l ">
    <a href="#" class="mx-auto">
        <img class="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="" />
    </a>

    <div class="flex flex-col items-center mt-6 mx-2">
        <img class="object-cover w-24 h-24 mx-2 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar"/>
        <h4 class="mx-2 mt-2 font-medium text-gray-800 ">John Doe</h4>
        <p class="mx-2 mt-1 text-sm font-medium text-gray-600">Général</p>
    </div>

    <div class="flex flex-col  justify-between flex-1 mt-14">
        <nav className='gap-8 space-y-8'>
            <a class="flex items-center transition-all duration-300 p-4 text-white  bg-main border-2 border-solid border-main rounded-lg " href="#">

                <span class="mx-auto font-medium flex  justify-center items-center space-x-3 gap-4"><FaBell className='text-2xl' />Dashboard</span>
            </a>

            <a class="flex items-center transition-all duration-300 p-4 text-main  bg-white border-2 border-solid border-main rounded-lg " href="#">

                <span class="mx-auto font-medium flex justify-center items-center space-x-3 gap-4"><IoMdSettings className='text-2xl' />Settings</span>
            </a>

            <br /> <br /> <br /> 
            
            <a class="flex items-center transition-all duration-300 p-4 text-white  bg-red-500 border-2 border-solid rounded-lg " href="#">

                <span class="mx-auto font-medium flex justify-center items-center space-x-3 gap-4"><CiLogout className='text-2xl' />Log out</span>
            </a>
           
        </nav>
    </div>
            </aside>

            <main className='fixed top-[30px] left-[300px] right-[40px] space-y-4'>
                <div className='p-8 rounded-[10px] flex gap-14 items-center bg-red-500'>
                    <IoIosWarning className='text-[80px]' />
                    <div className='space-y-4 '>
                        <h1 className='text-xl'>New Ambulance is calling for help</h1>

                        <ul className='flex gap-6'>
                            <li>2024/02/29</li>
                            <li>21:25 PM </li>
                            <li>Location : Usthb</li>
                            <li>Destination: Bordj Lkiffan</li>
                        </ul>

                        <div>
                            
                        </div>
                    </div>
                </div>

                <div className='p-8 rounded-[10px] flex gap-14 items-center bg-green-500'>
                <FaCheckCircle className='text-[80px]' />
                    <div className='space-y-4 '>
                        <h1 className='text-3xl'>Done</h1>

                        <ul className='flex gap-6'>
                            <li>2024/02/28</li>
                            <li>13:25 PM </li>
                            <li>Location : Beb Ezzouar</li>
                            <li>Destination: Dar El Bida</li>
                        </ul>

                        <div>
                            
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default Police