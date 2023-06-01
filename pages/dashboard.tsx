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
import { DecksUser } from '../Reducer/UserDecks'
import { DecksInitial, DecksReducer } from '../Reducer/Decks.reducer'

const Dashboard = () => {
  const AuthUser = useAuthUser()
  const [state, dispatch] = useReducer(DecksReducer, DecksInitial)
  const { userData } = state
  // const rtaDEcks = async () => {
  //   const decks = await DecksUser(dispatch)
  // }
  useEffect(() => {
    // rtaDEcks()
    DecksUser(dispatch)
  }, [])
  console.log('userData', userData)
  return (
    <div>
      <div>
        <img src={`${AuthUser.photoURL}`} alt="photo" />
        <p>Your email is {AuthUser.email ? AuthUser.email : 'unknown'}.</p>
        <button onClick={() => AuthUser.signOut()}>logout</button>
      </div>
      <div>
        <h1>mi nombre</h1>
        <ul>
          {userData &&
            userData.map((item:any,index:number) => {
              return (
                <li key={index}>
                  <h1>{item.name}</h1>
                  <div>
                    {item.decks &&
                      item.decks.map((deck:any, index:number) => {
                        return (
                          <div>
                          <p key={index}>{deck.title}</p>
                          <p>{deck.pregunta}</p>
                          <p>{deck.respuesta}</p>
                          </div>
                        )
                      })
                    } 
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div>

      </div>
    </div>
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