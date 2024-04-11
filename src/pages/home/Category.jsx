import React from 'react'
import { Link } from 'react-router-dom'

const companyLogo = [
  { id: 1, img: "/company/logo01.png" },
  { id: 2, img: "/company/logo02.png" },
  { id: 3, img: "/company/logo03.png" },
  { id: 4, img: "/company/logo04.png" },
  { id: 5, img: "/company/logo05.png" },
]
const Category = () => {
  return (
    <div className='max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28'>
      {/* brand logo */}
      <div className='flex items-center justify-around flex-wrap gap-5 py-5'>
        {
          companyLogo.map(({ id, img }) => (
            <div key={id}><img src={img} alt="" /></div>
          ))
        }
      </div>
      {/* category */}
      <div className='mt-8 flex flex-col md:flex-row items-center gap-4'>
        <p className='font-semibold uppercase text-center md:-rotate-90 bg-black text-white md:p-1.5 p-2 rounded-sm inline-flex'>Explore new and popular styles</p>
        <div>
          <Link to="/"><img src="/img/06.png" className='w-full hover:scale-105 transition-all duration-200' alt="" /></Link>
        </div>
        <div className='md:w-1/2 '>
            <div className='grid grid-cols-2 gap-4'>
              <Link to="/"><img src="/img/01.png" className='w-full hover:scale-105 transition-all duration-200 ' alt="" /></Link>
              <Link to="/"><img src="/img/02.png" className='w-full hover:scale-105 transition-all duration-200 ' alt="" /></Link>
              <Link to="/"><img src="/img/03.png" className='w-full hover:scale-105 transition-all duration-200 ' alt="" /></Link>
              <Link to="/"><img src="/img/20.png" className='w-full hover:scale-105 transition-all duration-200 ' alt="" /></Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Category