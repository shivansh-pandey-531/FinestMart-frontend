import React from 'react';
import delivery_boy1 from "../assets/delivery_boy1.png";
import fresh_spinach from "../assets/fresh_spinach.png";
import fresh_carrot from "../assets/fresh_carrot.png";
import { CiSearch } from "react-icons/ci";
import { GoCheckCircleFill } from "react-icons/go";


const HeroSection = () => {

  return (
    <div className='w-full flex mt-16 justify-between'>
      {/* Intro + Image */}
      <main className='flex relative'>
        <div className='flex flex-col'>
          <h1 className='text-7xl font-semibold tracking-wide'>Let your <span className='text-[#F38160]'>groceries</span><br/> come to you</h1>
          <p className='text-gray-400 mt-4 text-xl tracking-wide'>Get fresh groceries online without stepping out to<br/> make delicious food with the freshest ingredients</p>

          <div className='mt-8 flex items-center gap-0 w-[65%]'>
            <input type="text" className='bg-[#F3F3F4] focus:outline-none border-none px-5 py-3 rounded-l-lg w-full placeholder-gray-500 text-base' placeholder='Search here' />
            <div className='bg-[#F38160] h-12 flex items-center justify-center w-12 rounded-r-lg cursor-pointer'>
              <CiSearch color='white' size={22} />
            </div>
          </div>

          <div className=' mt-5 grid grid-cols-2 grid-rows-2 max-w-80'>
            <div className='gap-1 flex items-center'>
              <span className="rounded-full p-1 flex items-center justify-center"><GoCheckCircleFill size={18} color="#F0B70D" /></span>
              <p>Fresh Vegetables</p>
            </div>
            <div className='gap-1 flex items-center'>
              <span className="rounded-full p-1 flex items-center justify-center"><GoCheckCircleFill size={18} color="#F0B70D" /></span>
              <p>100% Guarantee</p>
            </div>
            <div className='gap-1 flex items-center'>
              <span className="rounded-full p-1 flex items-center justify-center"><GoCheckCircleFill size={18} color="#F0B70D" /></span>
              <p>Cash on Delivery</p>
            </div>
            <div className='gap-1 flex items-center'>
              <span className="rounded-full p-1 flex items-center justify-center"><GoCheckCircleFill size={18} color="#F0B70D" /></span>
              <p>Fast Delivery</p>
            </div>
          </div>
        </div>

      </main>

      <img src={delivery_boy1} className='h-96 hidden md:block xl:absolute right-96 top-24' alt="delivery-boy" />


      {/* 2 advertisement images */}
      <aside className='w-40 space-y-4 gap-7 hidden xl:block'>
        <div className='flex flex-col hover:scale-105 cursor-pointer transition-all duration-300 px-2 py-2 items-center bg-[#FDF7F4] border border-solid border-gray-500 rounded-3xl'>
          <img src={fresh_spinach} className='h-28 p-2' alt="fresh-spinach" />
          <p>Fresh Spinach</p>
          <p className='pb-2 text-red-400'>$12.00</p>
        </div>
        
        <div className='flex flex-col hover:scale-105 cursor-pointer transition-all duration-300 px-2 py-2 items-center w-fit bg-[#FDF7F4] border border-solid border-gray-500 rounded-3xl'>
          <img src={fresh_carrot} className='h-28 p-2' alt="fresh-carrot" />
          <p>Fresh Carrot</p>
          <p className='pb-2 text-red-400'>$9.00</p>
        </div>
      </aside>
    </div>
  )
}

export default HeroSection;