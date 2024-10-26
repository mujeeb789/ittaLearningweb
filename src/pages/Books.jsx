import React from 'react';
import BooksGrid  from "../components/BooksGrid";
import logo from "../assets/images/logo.png";
import { FaSearch } from "react-icons/fa";


function Books() {
    return (
        <main className="h-fit w-[100vw] ">
            <div className='flex  items-center justify-center '>
                <div className="my-10 h-[50px] flex items-center justify-center bg-[#080a54] hover:bg-blue-500 p-3 rounded-lg space-x-4 ">
                    <img src={logo} width={90} className="rounded-full  " />
                    <p className=' font-bold text-white text-sm'>BOOKS</p>
                </div>


            </div>

            
            <div className='flex  justify-center '>
                <input className='w-1/2 p-3 m-3 rounded border-2 border-solid border-[#080a54] hover:border-blue-500' type="text" />
                <button className='bg-[#080a54] text-white p-3 h-12 mt-3 hover:bg-blue-500 '><FaSearch size={24} /></button>
            </div>
            <div>
                <BooksGrid/>
            </div>
        </main>
    )
}

export default Books