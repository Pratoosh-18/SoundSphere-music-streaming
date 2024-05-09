import React, { useContext } from 'react'
import { PlayerContext } from '../context/Playercontext'

const Songscover = ({img,aname,desc,id}) => {

    const {playwithid} = useContext(PlayerContext)

  return (
    <div onClick={()=>playwithid(id)} className=' min-w-[180px] w-56 p-2 flex flex-col rounded hover:bg-gray-800'>
        <img className='rounded' src={img} alt="" />
        <div className='font-semibold text-base py-1.5'>{aname}</div>
        <div className='text-gray-400 text-sm'>{desc}</div>
    </div>
  )
}

export default Songscover