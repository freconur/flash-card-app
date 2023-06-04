import { getAuth, signOut } from "firebase/auth"
import { authApp } from "../../firebase/firebase.config"

const Logout = () => {
const auth = getAuth(authApp)
const handleLogout = () => {
  signOut(auth)
}

  return (
    <div>
      <button onClick={handleLogout}>Salir</button>
    </div>
  )
}

export default Logout