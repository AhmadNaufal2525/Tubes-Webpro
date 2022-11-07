import React from 'react'

export const BassicTitle = (props) => {
  return (
    <div className="mb-4">
        <h3 className="block text-gray-700 text-md font-bold mb-5">
            {props.title}
        </h3>
        <input className="border rounded-full w-full py-3 px-4 text-gray-700 leading-tight " type={props.type}/>
    </div>
  )
}
