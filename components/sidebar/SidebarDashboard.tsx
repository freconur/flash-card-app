import { useState } from "react"
import DecksUser from "../MyDecksUser/DecksUser"
import Logout from "../Logout/Logout"
import AddDeckButtonSidebar from "../AddDeckButtonSidebar/AddDeckButtonSidebar"
import AddDeck from "../AddDeck/AddDeck"

const SidebarDashboard = () => {

  const [showFormAddDeck, setShowFormAddDeck] = useState<boolean>(false)

  
  console.log('showFormAddDeck',showFormAddDeck)
  return (
    <div className={`  relative bg-secundary  overflow-y-scroll p-4 pr-2 text-white h-altura w-[500px]`}>
      {/* <div > */}
      <AddDeck setShowFormAddDeck={setShowFormAddDeck} showFormAddDeck={showFormAddDeck}/>
      <AddDeckButtonSidebar showFormAddDeck={showFormAddDeck} setShowFormAddDeck={setShowFormAddDeck}/>
      <DecksUser />
      <Logout />
    </div>
  )
}

export default SidebarDashboard