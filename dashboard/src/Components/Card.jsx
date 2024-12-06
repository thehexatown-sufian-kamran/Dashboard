import React from 'react'

const Card = ({icon, title, value, percentage}) => {
  return (
    <div className='bg-blue-800 shadow-lg p-4 rounded-lg  flex items-center justify-between
    dark:bg-gray-800 dark:text-white'>
<div>
            <h2 className=' font-semibold text-lg text-gray-300'>{title}</h2>
            <div className="flex items-center space-x-2">
            <p className='text-xl font-bold'>{value}</p>
            <span className='text-xl'>{percentage}</span>
        </div>
        </div>
        <div className='text-3xl bg-blue-700 p-3 rounded-full '>{icon}</div>
    </div>
  )
}

export default Card