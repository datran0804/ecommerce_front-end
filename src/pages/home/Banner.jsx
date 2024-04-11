import React from 'react'
import bannerImg from "/banner.png"
import { HiShoppingBag } from "react-icons/hi2";

const Banner = () => {
  return (
    <div className='bg-primayBG py-12 xl:px-28 px-4'>
      <div className='py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-14'>
          {/* hinh anh banner */}
          <div className='md:w-1/3 pt-4'>
          <img src={bannerImg} alt="" />
        </div>
        <div className='md:w-1/2'>
            <h1 className='text-5xl font-light mb-5'>Collections</h1>
            <p className='text-xl mb-7'>A collection of spring, summer, fall and winter models are all available in our store</p>
            <button className='bg-black hover:bg-orange-500 px-6 py-2 text-white font-semibold rounded-sm flex items-center gap-3'><HiShoppingBag className='inline-flex' />SHOP NOW
            </button>
        </div>
      
      </div>
    </div>
  )
}

export default Banner