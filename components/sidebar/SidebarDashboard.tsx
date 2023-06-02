import { useEffect, useReducer } from "react"
import AddButtonDeck from "../AddButtonDeck/AddButtonDeck"
import { UserDecks } from "../../Reducer/UserDecks"
import { DecksInitial, DecksReducer } from "../../Reducer/Decks.reducer"
import AddDeck from "../AddDeck/AddDeck"

const SidebarDashboard = () => {

  const [state, dispatch] = useReducer(DecksReducer, DecksInitial)
  // const { userDecks } = state
    useEffect(() => {
      UserDecks(dispatch)
    }, [])
  return (
    <div className='bg-black p-1 text-white h-screen w-[300px]'>
      <AddButtonDeck />
      <AddDeck/>

    </div>
  )
}

export default SidebarDashboard