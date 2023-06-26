import { useEffect, useReducer, useState } from "react"
import { useGlobalContext } from "../../context/ContextGlobal"
import InputNameUpdate from "./InputNameUpdate"
import { RiArrowLeftLine } from "react-icons/ri";
import DeckColors from "../DeckColors/DeckColors";
import DeckColorsUpdate from "../DeckColors/DeckColorsUpdate";
import { DecksInitial, DecksReducer } from "../../Reducer/Decks.reducer";
import { updateDataDeck } from "../../Reducer/UserDecks";

const UpdateDeck = () => {
  const { globalData, updateDeckShow } = useGlobalContext()
  const { settingsDeck, deckToUpdate } = globalData
  const [deckValuesUpdate, setDeckValuesUpdate] = useState<DecksUser>()
  // const [state, dispatch] = useReducer(DecksReducer, DecksInitial)

  useEffect(() => {
    setDeckValuesUpdate(deckToUpdate)
  }, [deckToUpdate])

  const handleChangeUpdateDeck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeckValuesUpdate({
      ...deckValuesUpdate,
      [e.target.name]: e.target.value
    })
  }
  const updateDeck = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    deckValuesUpdate && updateDataDeck(`${globalData.idUser}`,deckValuesUpdate)
    updateDeckShow()
  }
  // console.log("globalData",globalData)
  // console.log('deckToUpdate', deckToUpdate)
  // console.log('deckValuesUpdate', deckValuesUpdate)
  return (
    <div className={`${settingsDeck && 'duration-300 left-0'} absolute z-[200] -left-[500px] duration-300 bg-secundary p-2 w-full h-altura`}>

      <div onClick={updateDeckShow} className='flex justify-center items-center bg-transparent  text-gray-300 hover:text-gray-100 duration-100'>
        <RiArrowLeftLine className='cursor-pointer text-xl' />
      </div>
      <form onSubmit={updateDeck}>
        <InputNameUpdate deckValues={deckValuesUpdate} handleChangeUpdateDeck={handleChangeUpdateDeck} />
        <DeckColorsUpdate deckValues={deckValuesUpdate} setDeckValues={setDeckValuesUpdate}/>
        <button className="w-full border bg-gradient-to-r p-2 rounded-md border-none text-slate-800 mt-3 capitalize font-semibold from-orange-400 to-red-600">guardar</button>
      </form>
    </div>
  )
}

export default UpdateDeck