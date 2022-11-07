import React from 'react'
import google from '../../assets/google.png'

export default function LoginAlter() {
  return (
    <div>
        <button className='button bg-white border-solid border border-borderGrey rounded-full py-3 px-32 font-bold flex mt-6' type='submit'>
           <img className='w-6 mr-2' src={google} alt=''/> Login dengan google
        </button>
    </div>
  )
}
