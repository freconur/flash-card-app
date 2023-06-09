import React from 'react'
import { DECKS_COLOR } from '../../utils/color.var'

const AddDeckForm = () => {
  return (
    <form onSubmit={newDeckSubmit}>
        <label className='capitalize font-semibold text-lg'>nombre</label>
        <input 
        value={deckValues.title} name="title" 
        onChange={handleChangeNewDeck} 
        className='text-gray-100 w-full p-2 bg-transparent rounded-lg border-[1px] focus:outline-none focus:border-sky-500 border-gray-400 h-[40px] ' 
        type="text" />
        {/* colors */}
        <div className='my-4'>
          <label className='text-gray-200 font-semibold text-lg capitalize'>color</label>
          <ul className='flex gap-2 py-4 my-2 border-[0.1px] border-gray-400 rounded-lg justify-around items-center'>
            {DECKS_COLOR.map((color, index) => {
              return (
                <li className={`${color} rounded-full h-[25px] w-[25px]`} key={index}>

                </li>
              )
            })}
          </ul>
        </div>
        {/* create button */}
        <button disabled={true} className='w-full capitalize font-semibold text-md  rounded-lg p-2 bg-gradient-to-r from-indigo-400 to-blue-700 text-gray-800 hover:opacity-80 duration-300'>crear deck</button>
      </form>
    )
}

export default AddDeckForm