'client'
import {
  AuthAction,
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth'
import { FC, useEffect, useReducer, useState } from 'react'
import { CreateUser, ValidateUser, decksUserServerSideProps } from '../Reducer/UserDecks'
import { DecksInitial, DecksReducer } from '../Reducer/Decks.reducer'
import LayoutDashboard from '../layout/LayoutDashboard'
import { TestUser } from '../helpers/userFunctions'
import FlahsCards from '../components/FlashCards/FlahsCards'
type Props = {
  decksUser: DecksUser[]
  // idUser: string
}
export const getServerSideProps = withAuthUserTokenSSR({ whenUnauthed: AuthAction.REDIRECT_TO_LOGIN })(async ({AuthUser}) => {
  const idUser = AuthUser.id as string
  const decksUser = await decksUserServerSideProps(idUser)
  
  if (typeof window !== 'undefined') {
        localStorage.setItem('ID_USER',JSON.stringify(idUser));
    }
  return { 
    props: {decksUser}
  }
}
  )

const Dashboard: any = ({ decksUser }: Props) => {
  const AuthUser = useAuthUser()
  const [state, dispatch] = useReducer(DecksReducer, DecksInitial)
  const infoUser = { id: `${AuthUser.id}`, email: `${AuthUser.email}`, name: `${AuthUser.displayName}` }

  useEffect(() => {
    TestUser(dispatch, infoUser)
    dispatch({ type: "idUser", payload: `${AuthUser.id}` })
  }, [])
  return (
    <LayoutDashboard>
      <div className='w-full bg-background-flashcards'>
        <FlahsCards />
      </div>
    </LayoutDashboard>
  )
}

// Note that this is a higher-order function.

//se ejecuta en el servidor

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN
})(Dashboard)//funciona en client

