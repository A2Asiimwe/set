import React from 'react'
import Image from 'next/image';
import PartnersSection from '../common/partner_section';

interface topsectionProps{
  backgroundImage: string;
  title: string; 
  subtitle: string;
  Peoplevisiting:string
}
function Top_section() {
  return (
    <section className=' flex  justify-center p-10' >
     <PartnersSection  />
    
    <div className=''>  

    </div>
    </section> 
  )
}

export default Top_section