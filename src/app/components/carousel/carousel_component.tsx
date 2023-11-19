'use client'

import React from 'react'
import { Carousel } from 'flowbite-react';
import Image from 'next/image';


function carousel_component() {
  return (
    <div  className="h-[28rem] sm:h-64 xl:h-[28rem] 2xl:h-96  pt-3 ">
        <Carousel pauseOnHover>
        <Image src="/premium_ph.avif" width={1000} height={800} alt="..." />
        <Image src="/premium_ph.avif" width={1000} height={800} alt="..." />
        <Image src="/premium_ph.avif" width={1000} height={800} alt="..." />
        <Image src="/premium_ph.avif" width={1000} height={800} alt="..." />
        <Image src="/premium_ph.avif" width={1000} height={800} alt="..." />
    </Carousel>
    </div>
  )
}

export default carousel_component