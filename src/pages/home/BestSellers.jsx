import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const BestSellers = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("products.json").then(res => res.json()).then(data => setProducts(data))
    }, []);
    const BestSellers = products.filter((item) => item.status === "BEST SELLERS");
    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-28 px-4'>
            <div className='text-center'>
                <h2 className='text-3xl font-semibold capitalize text-center my-8'>BEST SELLERS</h2>
                <p className='text-black/75 capitalize md:w-2/3 mx-auto mb-8'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium tempora,
                    fugiat alias ex commodi eum esse itaque in vel nihil,
                    sequi quaerat aliquam earum adipisci, necessitatibus modi? Ullam, asperiores magnam.
                </p>
            </div>

            {/* best sellers products cards */}
            <div className='mb-16'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 3,
                          spaceBetween: 40,
                        },
                        1024: {
                          slidesPerView: 4,
                          spaceBetween: 50,
                        },
                      }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        BestSellers.map((product)=>(
                            <SwiperSlide key={product.id}>
                                <Link to={`/shop/${product.id}`} >
                                         <img src={product.image} alt="" className='mx-auto w-full hover:scale-105 transition-all' />
                                </Link>
                                <div className='mt-4 px-4'>
                                        <h4 className='text-base- font-semibold mb-2'>{product.title}</h4>
                                        </div>
                                        <div className='flex justify-between'>
                                        <p className='text-black/50 '>{product.category}</p>
                                        <p className='font-semibold'>{product.price}</p>
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>

        </div>
    )
}

export default BestSellers