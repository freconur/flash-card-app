import { useEffect, useReducer, useState } from "react"
import { DecksInitial, DecksReducer } from "../../Reducer/Decks.reducer"
import AddDeck from "../AddDeck/AddDeck"

const SidebarDashboard = () => {

  const [state, dispatch] = useReducer(DecksReducer, DecksInitial)
  const [newDeck, setNewDeck] = useState<any>()

  const onChangeNewDeck = (newDeck: Decks): void => {
    setNewDeck(newDeck)
  }
  return (
    <div className='bg-black p-1 text-white h-screen w-[300px]'>
      <AddDeck newDeck={onChangeNewDeck} />

    </div>
  )
}

export default SidebarDashboard