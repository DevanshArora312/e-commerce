import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='w-full bg-blue-100 grid grid-cols-1 md:grid-cols-2 max-md:gap-8 justify-items-center gap-x-4 py-4 lg:px-0 px-6 font-sans'>
        <div id='hero-text' className='flex justify-center items-start flex-col gap-y-2'>
            <span>Starting at <strong>Rs. 500</strong> only!</span>
            <div className='font-bold max-md:text-[20px] text-[30px] leading-tight'>
                <p>
                    The best spectacles
                </p>
                <p>
                    and sunglasses
                </p>
                <p>
                    collection.
                </p>
            </div>
            <button className='text-black bg-white p-2 rounded-md hover:bg-opacity-80 hover:shadow'>
                Shop Now
            </button>
        </div>
        <div id="hero-image">
            <Image
                src={"/images/hero.png"}
                alt='hero-image'
                width={300}
                height={300}
            />
        </div>
    </div>
  )
}

export default Hero