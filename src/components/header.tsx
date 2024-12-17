import React from 'react';
import { FaSearch,  } from 'react-icons/fa';
import { IoMdHeartEmpty } from 'react-icons/io';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Link from "next/link";
import Image from "next/image";
const Header: React.FC = () => {
  return (
    <header className="bg-gray-100 w-[1440px] h-[36px] px-6 ">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        
        {/* Logo - Left Side */}
        <div className="ml-[2.21px]">
          <Link href="/">
            <Image
              src="/Top logo.png" alt="Your Logo" height={24} width={24} />
          </Link>
        </div>

        {/* Navigation Links - Right Side */}
        <nav className="space-x-4 text-gray-700 ">
          <Link href="/store" className="hover:text-gray-900 font-bold">Find a Store |</Link>
          <Link href="/help" className="hover:text-gray-900 font-bold">Help |</Link>
          <Link href="/join" className="hover:text-gray-900 font-bold">Join Us |</Link>
          <Link href="/signin" className="hover:text-gray-900 font-bold">Sign In</Link>
        </nav>
      </div>


       {/* Second Header Line */}
       <div className="bg-white max-w-screen-xl mx-auto flex items-center justify-between w-[1440px] h-[60px] mt-2">
        {/* Left: Logo */}
        <div className=' flex items-center justify-between w-[78.47px] h-[78.47px] mt-[20px] left-[38.26px]'>
          <Link href="/">
            <Image src="/Logo2.png" alt="Your Logo" height={20.54} width={58.85}/>
          </Link>
        </div>
       {/* Center: Navigation Links */}
<div className="flex justify-center items-center mt-2 ">
  <nav className="space-x-6 text-gray-900 font-bold pl-8">
    <Link href="/new" className="hover:text-black">New & Featured</Link>
    <Link href="/men" className="hover:text-black">Men</Link>
    <Link href="/women" className="hover:text-black">Women</Link>
    <Link href="/kids" className="hover:text-black">Kids</Link>
    <Link href="/sale" className="hover:text-black">Sale</Link>
    <Link href="/snkrs" className="hover:text-black">SNKRS</Link>
  </nav>
</div>

       {/* Right: Search Bar + Icons */}
<div className="flex items-center space-x-6 mt-2">
  {/* Search Bar */}
  <div className="flex items-center border rounded-full px-4 py-1 w-[180px] h-[40px]">
    <FaSearch className="text-gray-600 w-6 h-6 mr-2" /> 
    <input
      type="text"
      placeholder="Search"
      className="text-sm focus:outline-none w-full"
    />
  </div>

          {/* Icons */}
          <div className="flex space-x-4 text-gray-900 text-xl">
            <IoMdHeartEmpty className="hover:text-black cursor-pointer w-[24px] h-[24px]" />
            <HiOutlineShoppingBag className="hover:text-black cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
