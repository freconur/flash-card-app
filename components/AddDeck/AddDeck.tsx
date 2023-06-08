import React, { useState } from 'react'
import { AddNewDeck } from '../../Reducer/UserDecks'
interface Props {
  newDeck: (newDeck: DecksUser) => void
}
const AddDeck = ({ newDeck }: Props) => {
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
    <form className='' onSubmit={newDeckSubmit}>
      <button className='w-full capitalize font-semibold text-md bg-green-500 rounded-lg p-2 text-white hover:bg-green-400'>agregar deck</button>
      <label className='capitalize font-semibold text-lg'>nombre</label>
      <input value={deckValues.title} name="title" onChange={handleChangeNewDeck} className='text-gray-500 w-full bg-blue-100 rounded-lg h-[40px]' type="text" />
    </form>
  )
}

export default AddDeck