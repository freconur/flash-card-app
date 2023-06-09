import React, { useState } from 'react'
import { AddNewDeck } from '../../Reducer/UserDecks'
import { RiArrowLeftLine } from "react-icons/ri";
import { DECKS_COLOR } from '../../utils/color.var';
import AddDeckForm from '../AddDeckForm/AddDeckForm';
interface Props {
  newDeck: (newDeck: DecksUser) => void,
  showFormAddDeck: boolean,
  setShowFormAddDeck: React.Dispatch<React.SetStateAction<boolean>>
}
const AddDeck = ({ newDeck, showFormAddDeck, setShowFormAddDeck }: Props) => {
  const [deckValues, setDeckValues] = useState<DecksUser>({
    title: "",
    flashcards: []
  })
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
  }

  return (
    <div className={`${showFormAddDeck && 'duration-300 left-0'} absolute -left-[500px] duration-300 bg-secundary p-2 w-full h-altura`}>
      <div className='flex justify-between mb-4 items-center gap-4'>
        <div onClick={() => setShowFormAddDeck(!showFormAddDeck)} className='flex justify-center items-center bg-transparent  text-gray-300 hover:text-gray-100 duration-100'>
          <RiArrowLeftLine className='cursor-pointer text-xl' />
        </div>
        <h3 className='capitalize text-gray-200 font-semibold text-xl w-full text-center'>crear deck de estudio</h3>
      </div>
      <AddDeckForm/>
    </div>

  )
}

export default AddDeck