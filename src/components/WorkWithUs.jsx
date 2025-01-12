import React from 'react'

const WorkWithUs = () => {
  return (
    <section className='w-full bg-white flex flex-col md:flex-row gap-10 p-10 md:p-20 items-center justify-center'>
        <div>
            <h1 className='text-2xl md:text-4xl font-bold w-full'>
                Empowering Top Companies with Seamless Integration
            </h1>
            <p className='mt-10 text-gray-500'>
            Experience seamless connections with our innovative solutions, designed
            to effortlessly integrate with your existing systems, enhance productivity, and drive your business towards greater success.
            </p>
            <button className='bg-green-200  mt-10 text-black px-6 rounded-full py-4'>
                Work With Us
            </button>
        </div>
        <div>
            <img className='rounded-xl w-[1700px]' src="map.png" alt="" />
        </div>
    </section>
  )
}

export default WorkWithUs