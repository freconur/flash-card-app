import { app } from 'firebase-admin'
import { getAuth, signOut } from 'firebase/auth'
import {
  AuthAction,
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth'
import { authApp } from '../firebase/firebase.config'
import { useEffect, useReducer, useState } from 'react'
import { CreateUser, ValidateUser } from '../Reducer/UserDecks'
import { DecksInitial, DecksReducer } from '../Reducer/Decks.reducer'
import LayoutDashboard from '../layout/LayoutDashboard'
import { TestUser } from '../helpers/userFunctions'
import FlahsCards from '../components/FlashCards/FlahsCards'
import SidebarDashboard from '../components/sidebar/SidebarDashboard'
import { useGlobalContext } from '../context/ContextGlobal'

const Dashboard = () => {
  const AuthUser = useAuthUser()
  const [state, dispatch] = useReducer(DecksReducer, DecksInitial)
  const [user, setUser] = useState<UserData>({})
  const infoUser = { id: `${AuthUser.id}`, email: `${AuthUser.email}`, name: `${AuthUser.displayName}` }
  
  useEffect(() => {
    TestUser(dispatch, infoUser)
    dispatch({ type: "idUser", payload: `${AuthUser.id}` })
    
  }, [])
  return (
    <LayoutDashboard>
    <div className='w-full bg-background'>
      <FlahsCards/>
    </div>
    </LayoutDashboard>
  )
}

// Note that this is a higher-order function.
export const getServerSideProps = withAuthUserTokenSSR(
  {
    whenUnauthed: AuthAction.REDIRECT_TO_LOGIN

  })(async () => {
    return {
      props: {}
    }
  }
  )
//se ejecuta en el servidor

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN
})(Dashboard)//funciona en client

