import React, { useState } from 'react'
import { useGlobalContext } from '../../context/ContextGlobal'

const DeckColors = () => {
  const context = useGlobalContext()
  const { pruebita } = context
  return (
    <ul className='my-4'>
      <label className='text-gray-200 font-semibold text-lg capitalize'>color</label>
      <div className={` flex gap-2 py-4 my-2 border-[0.1px] border-gray-400 rounded-lg justify-around items-center`}>
        <li onClick={() => pruebita("1")} className={`bg-gradient-to-t from-indigo-500 to-blue-700 rounded-full  h-[25px] w-[25px] opacity-50`}></li>
        <li className={`bg-gradient-to-t from-orange-400 to-red-600 rounded-full  h-[25px] w-[25px] opacity-50`}></li>
        <li className={`bg-gradient-to-t from-green-400 to-yellow-300 rounded-full  h-[25px] w-[25px] opacity-50`}></li>
        <li className={`bg-gradient-to-t from-fuchsia-500 to-purple-400 rounded-full  h-[25px] w-[25px] opacity-50`}></li>
        <li className={`bg-gradient-to-t from-pink-600 to-indigo-500 rounded-full  h-[25px] w-[25px] opacity-50`}></li>
        <li className={`bg-gradient-to-t from-teal-500 to-indigo-500 rounded-full  h-[25px] w-[25px] opacity-50`}></li>
      </div>
    </ul>
  )
}

export default DeckColors