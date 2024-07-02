
import React from 'react'

const AgentsBox = (props) => {
  return (
    
        <div className='relative'>
        <img className='border-4 border-blue-600 p-2 rounded-3xl m-4 md:h-[75vh] h-[40vh]' src={props.imgUrl} alt="john" />

        <div className='absolute bottom-10 left-10'>
        <h2 className='text-white italic bold md:text-[90px]'>{props.name}</h2>
        <p className='text-white italic md:text-[24px] '>{props.jobType}</p>
        </div>
        </div>
  )
}

export default AgentsBox
