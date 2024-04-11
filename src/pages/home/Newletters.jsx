import React from 'react'
import { Link } from 'react-router-dom'

const Newletters = () => {
  return (
    <div className='bg-[#1E2832] bg-opacity-5 xl:px-28 px-4 py-16'>
        <h2 className='mb-8 text-3xl font-semibold capitalize text-center my-8'>
            Follow products and discounts on Instagram
        </h2>
        {/* insta gird */}
        <div className='flex flex-wrap gap-5 items-center justify-center mb-20'>
            <Link to="/">
                <img src="/insta/card.png" alt="" />
            </Link>
            <Link to="/">
                <img src="/insta/card (1).png" alt="" />
            </Link>
            <Link to="/">
                <img src="/insta/card (2).png" alt="" />
            </Link>
            <Link to="/">
                <img src="/insta/card (3).png" alt="" />
            </Link>
            <Link to="/">
                <img src="/insta/card (4).png" alt="" />
            </Link>
            <Link to="/">
                <img src="/insta/card (5).png" alt="" />
            </Link>
        </div>
        {/* new letters */}
        <div>
            <h2 className='text-3xl font-semibold capitalize text-center my-8'> Subcribe to the newsletter </h2>
            <form  className='md:w-1/2 mx-auto text-center '>
                <input type="email" name='email' id='email' placeholder='EMAIL ADDRESS...' className='h-8 bg-transparent outline-none border-b-2 pl-2 border-black md:w-2/3 w-full mb-5 placeholder:text-black/50 mr-4 ' />
                <input type="submit" value={"Submit"} className='bg-black text-white px-6 py-1 rounded-sm' />
            </form>
        </div>
    </div>
  )
}

export default Newletters