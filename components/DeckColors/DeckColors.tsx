import { useEffect, useState } from 'react'
import { useSelectColors } from '../../Hooks/useSelectColor'
import { useGlobalContext } from '../../context/ContextGlobal'

interface Props {
  deckValues: DecksUser,
  setDeckValues:React.Dispatch<React.SetStateAction<DecksUser>>
}
const DeckColors = ({deckValues, setDeckValues}:Props) => {
  const [selectColor, setSelectColor] = useState<string>("")
  const { newValuesColors } = useSelectColors(selectColor)
  const AddColorToDeckValues = (color:string) => {
    setDeckValues({
      ...deckValues,
      colorDeck: color,
    })
  }
  useEffect(() => {
    document.getElementById('tests')?.click()
  },[])
  return (
    <div className='my-4'>
      <label className='text-gray-200 font-semibold text-lg capitalize'>color</label>
      <ul className={` flex gap-2 py-4 my-2 border-[0.1px] border-gray-400 rounded-lg justify-around items-center`}>
        <li id="tests" onClick={() => {setSelectColor("1"), AddColorToDeckValues("0")}} className={`${newValuesColors && newValuesColors[0].active ? "opacity-100 duration-300" : "opacity-30"} bg-gradient-to-t from-indigo-500 to-blue-700 rounded-full  h-[25px] w-[25px]`}></li>
        <li onClick={() => {setSelectColor("2"), AddColorToDeckValues("1")}} className={`${newValuesColors && newValuesColors[1].active ? "opacity-100 duration-300" : "opacity-30"} bg-gradient-to-t from-orange-400 to-red-600 rounded-full  h-[25px] w-[25px]`}></li>
        <li onClick={() => {setSelectColor("3"), AddColorToDeckValues("2")}} className={`${newValuesColors && newValuesColors[2].active ? "opacity-100 duration-300" : "opacity-30"} bg-gradient-to-t from-green-400 to-purple-500 rounded-full  h-[25px] w-[25px]`}></li>
        <li onClick={() => {setSelectColor("4"), AddColorToDeckValues("3")}} className={`${newValuesColors && newValuesColors[3].active ? "opacity-100 duration-300" : "opacity-30"} bg-gradient-to-t from-fuchsia-500 to-purple-400 rounded-full  h-[25px] w-[25px]`}></li>
        <li onClick={() => {setSelectColor("5"), AddColorToDeckValues("4")}} className={`${newValuesColors && newValuesColors[4].active ? "opacity-100 duration-300" : "opacity-30"} bg-gradient-to-t from-pink-600 to-indigo-500 rounded-full  h-[25px] w-[25px]`}></li>
        <li onClick={() => {setSelectColor("6"), AddColorToDeckValues("5")}} className={`${newValuesColors && newValuesColors[5].active ? "opacity-100 duration-300" : "opacity-30"} bg-gradient-to-t from-teal-500 to-indigo-500 rounded-full  h-[25px] w-[25px]`}></li>
      </ul>
    </div>
  )
}

export default DeckColors