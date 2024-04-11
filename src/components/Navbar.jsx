import React, { useState } from 'react'
import { FcSearch } from "react-icons/fc";
import logo from "/logo.png"
import { FaUserCircle,FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const[isMenuOpen,setIsMenuOpen] = useState(false)

  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen)
  }
  const navItems =[
    {title:"Jewelry & Accessories", path:"/"},
    {title:"Clothing & Shoes", path:"/"},
    {title:"Home & Living", path:"/"},
    {title:"Wedding & Party", path:"/"},
    {title:"Toys & Entertainment", path:"/"},
    {title:"Art & Collectibles", path:"/"},
    {title:"Craft Supplies & Tools", path:"/"}


  ]

  
  return (
    <header className=' xl:px-28 px-4 absolute top-0 right-0 left-0'>
        <nav className='flex justify-between items-center md:py-4 pt-6 pb-3 '>
        <FcSearch className='text-black w-5 h-5 cursor-pointer hidden md:block' /> 
        {/* logo */}
        <a href="/"><img src={logo} alt="" /></a>
        {/* account and shopping btn */}
        <div className='text-lg text-black sm:flex items-center gap-5 hidden'>
            <a href="/" className='flex items-center gap-2'><FaUserCircle /> Account </a>
            <a href="/" className='flex items-center gap-2'><FaShoppingBag /> Shopping </a>
        </div>
        {/* navbar cho dien thoai */}
        <div className='sm:hidden'>
          <button onClick={toggleMenu}>
            {
              isMenuOpen ? <FaTimes className='text-black w-5 h-5' /> : <FaBars className='text-black w-5 h-5'/>
            }
          </button>
        </div>
        </nav>
        <hr />
        {/* danh sach item */}
        <div className='pt-4 '>
          <ul className='lg:flex items-center justify-between text-black hidden'>
            {
              navItems.map(({title,path})=>(
                <li className='hover:text-orange-500' key={title}>
                  <Link to="/">{title}</Link>
                </li>
              ))
            }
          </ul>
        </div>
        {/* responsive cho mobile */}
        <div>
        <ul className={`bg-black text-white px-4 py-2 rounded ${isMenuOpen ? "":"hidden"}`}>
            {
              navItems.map(({title,path})=>(
                <li className='hover:text-orange-500 my-3 cursor-pointer' key={title}>
                  <Link to="/">{title}</Link>
                </li>
              ))
            }
          </ul>
        </div>
    </header>
  )
}

export default Navbar