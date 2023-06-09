import React from 'react'
import { RxPlus } from "react-icons/rx";

interface Props {
  showFormAddDeck: boolean,
  setShowFormAddDeck: React.Dispatch<React.SetStateAction<boolean>>
}

const AddDeckButtonSidebar = ({showFormAddDeck, setShowFormAddDeck}:Props) => {
  return (
    <div
    onClick={() => setShowFormAddDeck(!showFormAddDeck)}
    className='rounded-lg flex justify-center gap-4 bg-slate-800 items-center p-2 hover:bg-blue-950 cursor-pointer'>
      <div className='flex justify-center items-center h-[40px] w-[40px] rounded-full bg-transparent border-[0.1px] border-gray-400'>
        <RxPlus className='font-light text-lg text-slate-50' />
      </div>
      <span className='text-md capitalize font-semibold text-blue-400'>crear nuevo deck</span>
    </div>
  )
}

export default AddDeckButtonSidebar