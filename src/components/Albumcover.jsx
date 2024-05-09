import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Albumcover = ({img,aname,desc,id}) => {

    const Navigate = useNavigate()

  return (
    <div onClick={()=>Navigate('/dailymix')} className=' min-w-[180px] w-56 p-2 flex flex-col rounded hover:bg-gray-800'>
        <img className='rounded' src={img} alt="" />
        <div className='font-semibold text-base py-1.5'>{aname}</div>
        <div className='text-gray-400 text-sm'>{desc}</div>
    </div>
  )
}

export default Albumcover