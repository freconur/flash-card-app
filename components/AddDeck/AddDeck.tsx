import React, { useEffect, useState } from 'react'
import { AddNewDeck } from '../../Reducer/UserDecks'
import { RiArrowLeftLine } from "react-icons/ri";
import DeckColors from '../DeckColors/DeckColors';
interface Props {
  newDeck: (newDeck: DecksUser) => void,
  showFormAddDeck: boolean,
  setShowFormAddDeck: React.Dispatch<React.SetStateAction<boolean>>
}

const INITIAL_DECK_VALUES: DecksUser = {
  title: "",
  colorDeck: "0",
  countCards: 0
}
const AddDeck = ({ newDeck, showFormAddDeck, setShowFormAddDeck }: Props) => {
  const [deckValues, setDeckValues] = useState<DecksUser>(INITIAL_DECK_VALUES)
  const handleChangeNewDeck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeckValues({
      ...deckValues,
      [e.target.name]: e.target.value
    })
  }
  const newDeckSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    newDeck(deckValues)
    AddNewDeck(deckValues)
    setDeckValues(INITIAL_DECK_VALUES)
  }
  return (
    <div className={`${showFormAddDeck && 'duration-300 left-0'} absolute z-50 -left-[500px] duration-300 bg-secundary p-2 w-full h-altura`}>
      <div className='flex justify-between mb-4 items-center gap-4'>
        <div onClick={() => setShowFormAddDeck(!showFormAddDeck)} className='flex justify-center items-center bg-transparent  text-gray-300 hover:text-gray-100 duration-100'>
          <RiArrowLeftLine className='cursor-pointer text-xl' />
        </div>
        <h3 className='capitalize text-gray-200 font-semibold text-xl w-full text-center'>crear deck de estudio</h3>
      </div>
      <form onSubmit={newDeckSubmit}>
        <label className='capitalize font-semibold text-lg'>nombre</label>
        <input
          value={deckValues.title} name="title"
          onChange={handleChangeNewDeck}
          className='text-gray-100 w-full p-2 bg-transparent rounded-lg border-[1px] focus:outline-none focus:border-sky-500 border-gray-400 h-[40px] '
          type="text" />
        <DeckColors deckValues={deckValues} setDeckValues={setDeckValues} />
        <button onClick={() => setShowFormAddDeck(!showFormAddDeck)} disabled={!deckValues.title && true} className={` w-full capitalize font-semibold text-md  rounded-lg p-2  text-gray-800 hover:opacity-80 duration-300  ${deckValues.title === "" ? "bg-gradient-to-r from-gray-500 to-gray-700 cursor-default" : " cursor-pointer bg-gradient-to-r from-sky-200 to-sky-700"}`}>crear deck</button>
      </form>
    </div>

  )
}

export default AddDeck