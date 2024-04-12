import React from 'react'
import Header from '../Components/Header'
import Services from "../Components/Services"
import { Mainbg } from '../assets/index'
import {motion} from "framer-motion"

const Main = () => {
  return (
    <div className="relative" z-0>
    <main className='w-screen min-h-screen flex justify-center flex-col '>
        <img
        src={Mainbg}
        className="w-full h-full absolute top-0 left-0 md:w-full md:h-full"
        alt=""
      />
        <Header/>
        <div className='flex text-white py-10 h-full flex-col z-10 justify-center items-center w-full'>
            <div className=' flex flex-col justify-center items-center gap-5 top-[30%] w-max absolute'>
                <h3 className='text-6xl text-slate-300 top-[30%] w-max'>BOOST YOUR WORKSPACE</h3>
                <p className='text-3xl text-slate-500'>Grow your business with us</p>
            </div>
            <motion.div className='bg-gray-600 p-3 px-5 text-lg rounded-full hover:bg-gray-500 cursor-pointer'>
                    Get Started
            </motion.div>
        </div>
    </main>
    <Services/>
    </div>
  )
}

export default Main 