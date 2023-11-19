 'use client'; // For Next JS 13 app router

import Image from 'next/image';
import React from 'react';
import ScrollCarousel from 'scroll-carousel-react';

interface PartnersSectionProps {
    partners: string[];
  }

const ScrollCarouselComponent: React.FC<PartnersSectionProps> = ({partners}) => {
  return (
    <ScrollCarousel
      autoplay
      autoplaySpeed={1}
      speed={1}
      //onReady={() => console.log('I am ready')}
    >
      {partners.map((partner:string, index:number) => (
        <div key={index} className='bg-blue-300/20 border-2 border-blue-300/70 rounded h-36 w-48'>
        <Image src={partner} alt={`Partner ${index + 1}`} width={40} height={40} className="max-w-full h-auto" />
        </div>
      ))}
    </ScrollCarousel>
  );
};

export default ScrollCarouselComponent;