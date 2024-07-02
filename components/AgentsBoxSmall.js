import React from 'react'

const AgentsBoxSmall = (props) => {
  return (
   
        <div className='relative'>
        <img className='border-4 border-blue-600 p-2 rounded-[20px] h-[40vh]' src={props.imgUrl} alt="agent" />
        <div className='absolute bottom-6 left-6 '>
        <h2 className='text-white italic bold text-[300%]'>{props.name}</h2>
        <p className='text-white italic text-[150%%]'>{props.jobType}</p>
        </div>
        </div>
    
  
  )
}

export default AgentsBoxSmall
