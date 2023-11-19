import React from 'react'
import Image from 'next/image'
import Button from '@/app/components/navigation/navBar/Button'
import Carousel_component from '@/app/components/carousel/carousel_component'


function HeadSection() {
  return (
    <div className='flex-col  h-96 min-h-screen w-full  border-4 2xl:max-container relative flex py-1 lg:mb-10 lg:py-10 xl:mb-10 px-48 ``'>
       {/* <Image src='/my_bg_image.jpeg' alt=" Landing page background"layout='fill'/> */}
       <div  className='mt-5 '>
        <div className='text-left pt-2 pb-2'>
            <span className=''>{`13 March 2022 - May 2023`} </span>
        </div>
  
      </div> 
      <div className='flex flex-row space-x-14 mt-16  w-full border-2 h-[30rem]'>
      <span className='text-5xl font-bold w-[25rem] mt-20'>
        Exploring Nature & crafting Extraodinary experiences
        </span>
       
       <div className='w-[10rem] px-10 mt-60 '>Lets Go </div>
       <div className='w-[50rem] '>
       <Carousel_component/>
       </div>
       
      </div> 
      <div className='flex  justify-center mt-5 text-xl text-center tracking-wide'> <p className=' mt-1 text-gray-30 xl:max-w-[40rem] '>
        The origin of good memories arise from good experiences, 
        we want all your journeys to have the incorruptible beauty of nature.
        Nature callout in a cryptic rytheme, its time to embrace  

       </p></div>

       <div className='flex w-full gap-4 sm:flex-row justify-center p-5 mt-5'>
          <Button 
          type="button" 
          title="Contact Us" 
          variant="btn_dark_green"/>

       </div>
                
    </div>
  )
}

export default HeadSection