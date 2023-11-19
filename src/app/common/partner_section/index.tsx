import Image from 'next/image';
import React from 'react'
import dynamic from 'next/dynamic'; // slide should be dynamic import

const ScrollCarousel = dynamic(() => import('@/app/components/slider'), { ssr: false });

const partnerLogos = [
  '/partner1.png',
  '/partner2.png',
  '/partner3.png',
 
  // Add more partner logos as needed
];


const PartnersSection = () => {
        return (
          <section className="bg-gray-100 p-8 flex-col ">
            <div className='flex justify-center'>
            <h2 className="text-3xl font-bold mb-6">Our Partners</h2>
            </div>
            
            <div className="flex flex-wrap justify-center ">
               <ScrollCarousel partners={partnerLogos}/>
            </div>
          </section>
        );
      };
  


export default PartnersSection