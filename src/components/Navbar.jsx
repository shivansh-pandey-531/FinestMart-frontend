import React from 'react';
import { MdOutlineShoppingBag } from "react-icons/md";


const Navbar = () => {

  const menuItems = ['Home', 'Categories', 'Sales', 'FAQ', 'About', 'Contact'];
  const itemClass = "text-gray-400 hover:text-red-500 cursor-pointer transition-colors duration-300";


  return (
    <div className='flex items-center justify-between text-lg'>
        <div className='flex items-center text-red-500 text-2xl tracking-wide font-semibold cursor-pointer'>
            Finest<span className='text-orange-400'>Mart</span>
        </div>

        <div className="flex items-center text-base gap-10">
            {
                menuItems.map((item, idx) => (
                    <div key={idx} className=" hidden lg:block group items-center">
                        <div className={itemClass}>{item}</div>
                        <div className="bg-red-500 h-[2px] w-[70%] opacity-0 group-hover:opacity-100 duration-300"></div>
                    </div>
                ))
            }
        </div>
        
        <div className='flex items-center gap-6 mr-2'>
            <div className='relative mr-5 pt-2 cursor-pointer'>
                <MdOutlineShoppingBag size={22} />
                <div className='bg-[#F38160] h-2 w-2 rounded-full absolute right-0 top-0'></div>
            </div>
            <button className='border-none text-base text-[#F38160] underline bg-white cursor-pointer'>Sign In</button>
            <button className='border-none text-base bg-[#F38160] text-white rounded-xl px-6 py-2 cursor-pointer'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar;