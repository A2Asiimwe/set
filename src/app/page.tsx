import Image from 'next/image'
import HeadSection from './common/head_section/indext'
import Footer from './common/footer_section'
import Top_section from './Home/Top_section'
export default function Home() {
  return (
  <>
          <div className=' w-full h-screen bg-green-200  '>
          <HeadSection/>
          </div>
       
        <div className='w-full'>
          <div className=' w-full h-screen bg-blue-200 '>
            <Top_section/>
          </div>
        </div>
        <div className='w-full'>
          <div className=' w-full h-screen bg-yellow-200 '></div>
        </div>
        <div className='w-full'>
          <div className=' w-full h-screen bg-black '>
            <Footer/>
          </div>
        </div>
  </>
  )
}
