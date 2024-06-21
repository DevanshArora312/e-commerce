import Link from 'next/link';
import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { BsCart4 } from "react-icons/bs";
const Header = () => {
  return (
    <header>
      <nav className='w-full bg-black/90 text-md md:text-xl flex justify-around py-3 px-7 items-center'>
        <Link href="/" className='rounded-lg hover:bg-white/20 p-2 text-white'>
          SO
        </Link>
        <div className='border-[3px] h-[40px] max-md:hidden flex border-blue-600 items-center'>
          <input className='w-[350px] max-[770px]:w-[200px] h-[35px] p-2 focus:outline-none' placeholder='Search..' />
          <div className='bg-blue-600 h-full text-white flex justify-center items-center px-2'>
            <IoSearchOutline size={25} />
          </div>
        </div>
        <div className='md:px-5 flex gap-x-6 '>
          <Link href="/" className='rounded-lg hover:bg-white/20 p-2 text-white flex items-center gap-x-2'>
            <BsCart4 className='mb-[3px]'/> Cart
          </Link>
          <Link href="/" className='rounded-lg hover:bg-white/20 p-2 text-white flex items-center gap-x-2 '>
            <LuUser2 className='p-[3px] border-[2px] border-white rounded-full text-[30px]'/> Sign-in
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header;