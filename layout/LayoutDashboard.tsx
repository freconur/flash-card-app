import { useState } from "react"
import SidebarDashboard from "../components/sidebar/SidebarDashboard"
import DeleteDeckModal from "../modal/DeleteDeckModal"


interface Props {
  children: JSX.Element
}
const LayoutDashboard = ({ children }: Props) => {
  return (
    <div className="relative flex">
      <SidebarDashboard />
      {children}
    </div>
  )
}

export default LayoutDashboard