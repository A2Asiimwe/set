import React from 'react'
import Image from 'next/image'
function index() {
  return (
    <footer>
        <div className='flex flex-row'>
            <Image src="/icon.jpg" width={30} height={30} alt="icon"/>
            <div className='flex-col'>
                <p>Location</p>
                <p>55</p>
                
                </div>    
            
         </div>

    </footer>
  )
}

export default index