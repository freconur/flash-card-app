import { getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { useEffect, useReducer, useState } from "react";
import { googleSignInInitiate } from "../../Reducer/User";
import { DecksInitial, DecksReducer } from "../../Reducer/Decks.reducer";

const Navbar = () => {
  const auth = getAuth(app);

  const [state, dispatch] = useReducer(DecksReducer, DecksInitial);
  const { user,currentUsera } = state 
  const [name, setName] = useState<string | null >("")
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser){
        console.log('displayName',authUser.displayName)
        console.log('authUser',authUser)
        console.log('authUser',authUser.refreshToken)
        const userToken = authUser.refreshToken
        const displayname  = authUser.displayName
        localStorage.setItem("userToken",userToken)
        setName(authUser.displayName)
        dispatch({type:"currentUsera", payload:authUser.displayName })
  console.log('userToken',userToken)

      }
    })
  }, [user])
  const infoToken = JSON.stringify(localStorage.getItem('userToken'))
  console.log('infoToken',JSON.parse(infoToken))

  const handleSingInGoogle = () => {
    //aqui tengo que colocar el reducer que va a gestionar el login con google
    googleSignInInitiate(dispatch)
  }
  console.log('user', user)
  console.log('currentUsera', currentUsera)
  return (
    <div className='w-full bg-blue-500 h-[60px] flex shadow-md justify-between p-2'>
      <div>FlashCards</div>
      <div className="flex gap-3">
        <div className="w-[45px] h-[45px] justify-center text-xl items-center flex bg-green-400 font-semibold text-white rounded-full shadow-lg">F</div>
        <p className="text-white font-semibold text-lg capitalize flex items-center justify-center">
        
          {user && 
          // <span>hola {user.email}!</span>
          <span>hola {name}!</span>
          }
        </p>
        <div onClick={handleSingInGoogle} className="bg-yellow-500 text-white font-semibold w-[150px] flex items-center justify-center capitalize rounded-sm cursor-pointer">Login</div>
      </div>
    </div>
  )
}

export default Navbar