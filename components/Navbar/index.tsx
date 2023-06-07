// import { app } from "firebase-admin"
import { getAuth } from "firebase/auth"
import Link from "next/link"
import { useEffect, useReducer, useState } from "react";
import { authApp } from "../../firebase/firebase.config";
import { DecksInitial, DecksReducer } from "../../Reducer/Decks.reducer";
import Image from "next/image";

const Navbar = () => {
  const [state, dispatch] = useReducer(DecksReducer, DecksInitial)
  const [userInfoNav, setUserInfoNav] = useState<UserInfo>()
  const auth = getAuth(authApp);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUserInfoNav({
          ...userInfoNav,
          name:`${authUser.displayName}`,
          photo:`${authUser.photoURL}`,
          email:`${authUser.email}`,
        })
      }
    })
  }, [])
  return (
    <nav className='w-full  bg-principal h-[60px] flex shadow-md justify-between p-2'>
      <div className="text-white font-semibold">FlashCards</div>
      <div className="flex gap-3">
        
        {/* <Image className='w-full' src={`/${userInfoNav?.photo}`} width={30} height={30} alt={`${userInfoNav?.name}`} /> */}
        <img className='w-[30px] h-[30px]' src={`${userInfoNav?.photo}`} alt={`${userInfoNav?.name}`} />
        <p className="text-white font-semibold text-lg capitalize flex items-center justify-center">
        </p>
        <div>
          {
            userInfoNav ?
              <Link href="/dashboard">
                <div className="text-white font-semibold text-md">Hola {`${userInfoNav?.name}`}!</div>
              </Link>
              :
              <Link href="/auth">
                <div className="bg-yellow-500 text-white font-semibold w-[150px] flex items-center justify-center capitalize rounded-sm cursor-pointer">Login</div>
              </Link>
          }
        </div>
      </div>
    </nav>
  )
}
export default Navbar