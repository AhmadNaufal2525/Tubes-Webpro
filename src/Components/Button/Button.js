import React from 'react'

export const Button = (props) => {
  return (
    <button className='button bg-primaryColor w-full text-white py-3 rounded-full mt-4 font-bold ' type='submit'>
        {props.title}
    </button>
  )
}
