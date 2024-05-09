import React from 'react'
import Albumcover from './Albumcover'
import { albumsData,songsData } from '../assets/assets'
import Songscover from './Songscover'
import Footer from './Footer'

const Page1 = () => {
  return (
    <>
      <div>
        <div className="flex gap-2 py-6">
          <div className="text-[14px] text-black font-medium px-3 bg-white py-1 rounded-full">
            All
          </div>
          <div className="text-[14px] text-black font-medium px-3 bg-white py-1 rounded-full">
            Music
          </div>
          <div className="text-[14px] text-black font-medium px-3 bg-white py-1 rounded-full">
            Podcasts
          </div>
        </div>
      </div>

      <div>
        <p className='text-2xl font-bold mb-2'>Made for you</p>
      </div>

      <div className='flex overflow-auto'>
        {albumsData.map((item,index)=>(<Albumcover key={index} aname={item.name} desc={item.desc} id={item.id} img={item.image}/>))}
      </div>

      <div>
        <p className='text-2xl font-bold mb-2 mt-6'>Your top mixes</p>
      </div>

      <div className='flex overflow-auto'>
        {songsData.map((item,index)=>(<Songscover key={index} sname={item.name} desc={item.desc} id={item.id} img={item.image}/>))}
      </div>
    
        

      <div className='w-full bg-black'>
      <Footer/>
      </div>

    </>
  )
}

export default Page1