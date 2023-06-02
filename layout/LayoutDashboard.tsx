import SidebarDashboard from "../components/sidebar/SidebarDashboard"


interface Props {
  children: JSX.Element
}
const LayoutDashboard = ({children}:Props ) => {
  return (
    <div className="flex">
      <SidebarDashboard/>
        {children}
    </div>
  )
}

export default LayoutDashboard