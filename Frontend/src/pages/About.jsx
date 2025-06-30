import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT<span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>The Appointment Booking System simplifies scheduling doctor consultations by allowing users to browse doctors, check availability, and book appointments effortlessly. It ensures a smooth and user-friendly experience for efficient booking management.</p>
          <p>Doctors can set their availability, and the system dynamically generates time slots for accurate scheduling. With a responsive design, it works seamlessly across devices, enhancing accessibility and convenience.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Future enhancements may include online payments, video consultations, and AI-powered recommendations. Prioritizing security and privacy, the system aims to streamline medical scheduling and improve healthcare accessibility.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#5F6FFF] hover:text-white transition-all duration-500 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY</b>
          <p>Streamline appointment scheduling that fit into your busy lifestyle.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#5F6FFF] hover:text-white transition-all duration-500 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE</b>
          <p>Accesss to a network of a truted healthcare professionals in your area.</p>
        </div> 

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#5F6FFF] hover:text-white transition-all duration-500 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION</b>
          <p>Tailored recommendations and reminder to help you stay on top of your health.</p>
        </div>
      </div>
    </div>
  )
}

export default About