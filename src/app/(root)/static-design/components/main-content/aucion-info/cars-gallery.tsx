import { ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

import carOne from '@/assets/images/cars/car-1.jpeg'
import carTwo from '@/assets/images/cars/car-2.jpeg'
import carThree from '@/assets/images/cars/car-3.webp'
import carFour from '@/assets/images/cars/car-4.jpeg'
import carFive from '@/assets/images/cars/car-5.webp'
import { Button } from '@/components/ui/button'

const CAR_IMAGES = [carOne, carTwo, carThree, carFour, carFive]
const CarImageGallery = () => {
  return (
    <aside className='flex  items-center justify-between gap-1 lg:flex-col lg:gap-2 '>
      <Button size={'icon'} className='h-8 w-8 rounded-lg bg-white shadow-md transition'>
        <ChevronUp className='h-6 w-6 text-black max-lg:rotate-90' />
      </Button>

      {CAR_IMAGES.map((car, index) => (
        <Button
          key={index}
          variant={'link'}
          className='relative h-20 w-20 overflow-hidden rounded-lg max-sm:h-14 max-sm:w-14 '
        >
          <Image fill src={car} alt='car' className='object-cover' sizes='160px' />
        </Button>
      ))}

      <Button size={'icon'} className='h-8 w-8 rounded-lg bg-white shadow-md transition'>
        <ChevronDown className='h-6 w-6 text-black max-lg:rotate-90' />
      </Button>
    </aside>
  )
}

export default CarImageGallery
