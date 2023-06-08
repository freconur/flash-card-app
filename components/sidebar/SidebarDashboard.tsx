import { useEffect, useReducer, useState } from "react"
import { DecksInitial, DecksReducer } from "../../Reducer/Decks.reducer"
import styles from '../../styles/Scrollbar.module.css'
import AddDeck from "../AddDeck/AddDeck"
import DecksUser from "../MyDecksUser/DecksUser"
import Logout from "../Logout/Logout"

const SidebarDashboard = () => {

  const [newDeck, setNewDeck] = useState<DecksUser>()

  const onChangeNewDeck = (newDeck: DecksUser): void => {
    setNewDeck(newDeck)
  }
  return (
    <div className='bg-secundary  overflow-y-scroll p-1 text-white h-altura w-[400px]'>
  {/* <div > */}
      <AddDeck newDeck={onChangeNewDeck} />
      <DecksUser/>
      <Logout/>
    </div>
  )
}

export default SidebarDashboard