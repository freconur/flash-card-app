import { useState } from "react"
import DecksUser from "../MyDecksUser/DecksUser"
import Logout from "../Logout/Logout"
import AddDeckButtonSidebar from "../AddDeckButtonSidebar/AddDeckButtonSidebar"
import AddDeck from "../AddDeck/AddDeck"
import UpdateDeck from "../UpdateDeck/UpdateDeck"

const SidebarDashboard = () => {

  const [newDeck, setNewDeck] = useState<DecksUser>()
  const [showFormAddDeck, setShowFormAddDeck] = useState<boolean>(false)

  const onChangeNewDeck = (newDeck: DecksUser): void => {
    setNewDeck(newDeck)
  }
  return (
    <div className={`  relative bg-secundary  overflow-y-scroll p-4 pr-2 text-white h-altura w-[500px]`}>
      {/* <div > */}
      <AddDeck setShowFormAddDeck={setShowFormAddDeck} showFormAddDeck={showFormAddDeck} newDeck={onChangeNewDeck} />
      <UpdateDeck/>
      <AddDeckButtonSidebar showFormAddDeck={showFormAddDeck} setShowFormAddDeck={setShowFormAddDeck}/>
      <DecksUser />
      <Logout />
    </div>
  )
}

export default SidebarDashboard