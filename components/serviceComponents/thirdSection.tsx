'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './swiper.css';

const images = [
  { src: '/book1.png', alt: 'book1' },
  { src: '/book2.png', alt: 'book2' },
  { src: '/book3.png', alt: 'book3' },
  { src: '/book4.png', alt: 'book4' },
  { src: '/book5.png', alt: 'book5' },
  { src: '/book6.png', alt: 'book6' },
  { src: '/book7.png', alt: 'book7' },
  { src: '/book8.png', alt: 'book8' },
  { src: '/book9.png', alt: 'book9' },
  { src: '/book10.png', alt: 'book10' },
  { src: '/book11.png', alt: 'book11' },
  { src: '/book12.png', alt: 'book12' },
  { src: '/book13.png', alt: 'book13' },
  { src: '/book14.png', alt: 'book14' },
  { src: '/book15.png', alt: 'book15' },
];

const Ghost = () => {
  return (
    <div className=" px-4 lg:px-20 xl:px-32 py-10">
      <div className="text-start mb-10">
        <h2 className="text-[26px] lg:text-[28px] font-bold mb-2">
          Our eBook Ghostwriting Service Has <span className="text-red-500">Delivered 9000+</span> Orders So Far
        </h2>
        <p className='text-[14px] lg:text-[16px]'>
          Tap expert writers and a partner who gets modern content marketing. In a sea of sameness, stand out in search with our E-book writing Service.
        </p>
      </div>

      <Swiper
  spaceBetween={5}
  slidesPerView={5}
  loop={true}
  autoplay={{
    delay: 1000,
    disableOnInteraction: false,
  }}
  pagination={{
    clickable: true,
    dynamicBullets: true,
  }}
  modules={[Autoplay, Pagination]}
  className="relative h-[200px] md:h-[300px] lg:h-[400px]" 
>
  {images.map((image, index) => (
    <SwiperSlide key={index}>
      <Image
        src={image.src}
        alt={image.alt}
        height={400} 
        width={300} 
        className="transition-all duration-700 ease-linear object-contain"
      />
    </SwiperSlide>
  ))}
</Swiper>


      <div className="flex justify-center mt-6">
        <div className="swiper-pagination"></div>
      </div>
     
      <div className="bg-transparent-100 p-6 mt-10 rounded-lg ">
      <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-bold text-[#010405] leading-tight">
            Hire an <span className="text-red-500">Affordable Ghost Writing</span> <span className="text-black-500">Company to vanish your publishing problems</span>
          </h2>
          <p className="text-[#020608] mt-4 text-[14px] lg:text-[16px] leading-relaxed">
          If you are looking around for the cheapest eBook writers for hiring purposes, put the seal on your search! EBookwritings.com is the cheapest eBook ghostwriting agency offering its high-quality eBook writing services at the lowest prices. Our cheap eBook writing service helps the audience to work with the first-class eBook ghostwriting company, without breaking the bank.
          </p>
      </div>
      
      <div className="h-[4px] bg-red-500 my-4"></div>



    </div>
   
  );
};

export default Ghost;