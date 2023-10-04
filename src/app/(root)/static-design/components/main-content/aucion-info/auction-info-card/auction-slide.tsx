'use client'
import Lottie from 'lottie-react'
import { Eye, Flag, Heart, Share2 } from 'lucide-react'
import React from 'react'

import LiveIconAnimation from '@/assets/animations/live-animation.json'
import carSlideImage from '@/assets/images/cars/car-slide.jpg'
import { Button } from '@/components/ui/button'

const ICONS = [
  { Component: Flag, label: 'Flag' },
  { Component: Heart, label: 'Heart' },
  { Component: Share2, label: 'Share' },
]

const AuctionSlide = () => {
  const renderIconButtons = () =>
    ICONS.map(({ Component, label }) => (
      <Button key={label} size={'icon'} variant={'link'} className='h-12 w-12 rounded-full bg-[#6E6B6B] shadow-md'>
        <Component className='h-6 w-6 text-white' />
      </Button>
    ))
  return (
    <figure
      style={{ backgroundImage: `url(${carSlideImage.src})` }}
      className={`h-[380px] bg-cover bg-center bg-no-repeat`}
    >
      <section className='flex items-center justify-between '>
        <div className='m-2 flex overflow-hidden rounded-lg text-white max-sm:self-start md:m-5'>
          <div className='relative w-16  bg-white p-2'>
            <div className='absolute left-1/2 top-[-10px] h-3 w-24 -translate-x-1/2'>
              <Lottie animationData={LiveIconAnimation} loop={true} />
            </div>
          </div>
          <div className='flex bg-[#6E6B6B] p-2  py-[6px]  '>
            <div className=' flex items-center border-l-2 border-[#FEFEFE]/30 px-3   '>
              <time className='mt-1 text-lg leading-[0]'>02:00</time>
            </div>

            <div className=' flex items-center gap-1 p-2 py-[6px] '>
              <Eye className='h-6 w-6 ' />
              <span className='mt-1 text-sm leading-none'>3000</span>
            </div>
          </div>
        </div>

        <div className='m-2  flex items-center  gap-3 max-sm:flex-col md:m-5'>{renderIconButtons()}</div>
      </section>
    </figure>
  )
}

export default AuctionSlide
