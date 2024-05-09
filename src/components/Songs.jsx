import React from 'react'

const Songs = ({img,sname,decs,id}) => {
  return (
    <div className=' min-w-[180px] w-56 p-2 flex flex-col rounded hover:bg-gray-800'>
        <img className='rounded' src={img} alt="" />
        <div className='font-semibold text-base py-1.5'>{sname}</div>
        <div className='text-gray-400 text-sm'>{desc}</div>
    </div>
  )
}

export default Songs