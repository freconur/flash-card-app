// import { app } from "firebase-admin"
import { getAuth } from "firebase/auth"
import Link from "next/link"
import { useEffect, useReducer, useState } from "react";
import { authApp } from "../../firebase/firebase.config";
import { DecksInitial, DecksReducer } from "../../Reducer/Decks.reducer";

const Navbar = () => {
  const [state, dispatch] = useReducer(DecksReducer, DecksInitial)
  const [name, setName] = useState<string | null>("")
  const auth = getAuth(authApp);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log('authUser', authUser)
        setName(authUser.displayName)
        dispatch({ type: "userCurrent", payload: authUser.displayName })
      }
    })
  }, [name])
  return (
    <div className='w-full bg-blue-500 h-[60px] flex shadow-md justify-between p-2'>
      <div>FlashCards</div>
      <div className="flex gap-3">
        <div className="w-[45px] h-[45px] justify-center text-xl items-center flex bg-green-400 font-semibold text-white rounded-full shadow-lg">F</div>
        <p className="text-white font-semibold text-lg capitalize flex items-center justify-center">
        </p>
        <div>
          {
            name ?
              <Link href="/dashboard">
                <div className="text-white font-semibold text-md">Hola {name}!</div>
              </Link>
              :
              <Link href="/auth">
                <div className="bg-yellow-500 text-white font-semibold w-[150px] flex items-center justify-center capitalize rounded-sm cursor-pointer">Login</div>
              </Link>
          }
        </div>
      </div>
    </div>
  )
}
export default Navbar