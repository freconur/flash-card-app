import { useEffect, useState } from "react"
import { useGlobalContext } from "../../context/ContextGlobal"
import InputNameUpdate from "./InputNameUpdate"
import { RiArrowLeftLine } from "react-icons/ri";
import DeckColors from "../DeckColors/DeckColors";
import DeckColorsUpdate from "../DeckColors/DeckColorsUpdate";

const UpdateDeck = () => {
  const { globalData, updateDeckShow } = useGlobalContext()
  const { settingsDeck, deckToUpdate } = globalData
  const [deckValuesUpdate, setDeckValuesUpdate] = useState<DecksUser>()

  useEffect(() => {
    setDeckValuesUpdate(deckToUpdate)
  }, [deckToUpdate])

  const handleChangeUpdateDeck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeckValuesUpdate({
      ...deckValuesUpdate,
      [e.target.name]: e.target.value
    })
  }
  console.log('deckToUpdate', deckToUpdate)
  console.log('deckValuesUpdate', deckValuesUpdate)
  return (
    <div className={`${settingsDeck && 'duration-300 left-0'} absolute z-[200] -left-[500px] duration-300 bg-secundary p-2 w-full h-altura`}>

      <div onClick={updateDeckShow} className='flex justify-center items-center bg-transparent  text-gray-300 hover:text-gray-100 duration-100'>
        <RiArrowLeftLine className='cursor-pointer text-xl' />
      </div>
      <form>
        <InputNameUpdate deckValues={deckValuesUpdate} handleChangeUpdateDeck={handleChangeUpdateDeck} />
        <DeckColorsUpdate deckValues={deckValuesUpdate} setDeckValues={setDeckValuesUpdate}/>
      </form>
    </div>
  )
}

export default UpdateDeck