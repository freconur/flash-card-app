import React from 'react'

interface Props {
  deckValues: DecksUser | undefined,
  handleChangeUpdateDeck: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const InputNameUpdate = ({ deckValues, handleChangeUpdateDeck }: Props) => {
  return (
    <div>
      <label className='capitalize font-semibold text-lg'>nombre</label>
      <input
        value={deckValues?.title}
        name="title"
        onChange={handleChangeUpdateDeck}
        className='text-gray-100 w-full p-2 bg-transparent rounded-lg border-[1px] focus:outline-none focus:border-sky-500 border-gray-400 h-[40px] '
        type="text" 
        placeholder={deckValues?.title}/>
    </div>
  )
}

export default InputNameUpdate