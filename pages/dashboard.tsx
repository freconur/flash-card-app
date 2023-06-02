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
import { CreateUser, UserDecks, ValidateUser } from '../Reducer/UserDecks'
import { DecksInitial, DecksReducer } from '../Reducer/Decks.reducer'
import LayoutDashboard from '../layout/LayoutDashboard'
import { TestUser } from '../helpers/userFunctions'

const Dashboard = () => {
  const AuthUser = useAuthUser()
  const [state, dispatch] = useReducer(DecksReducer, DecksInitial)
  const [user, setUser] = useState<UserData>({})
  const infoUser = { id: `${AuthUser.id}`, email: `${AuthUser.email}`, name: `${AuthUser.displayName}` }

  // const testUser = async () => {
  //   const rta: boolean = await ValidateUser(dispatch, `${AuthUser.id}`)
  //   if (rta === false) {
  //     setUser({
  //       ...user,
  //       decks: "",
  //       email: `${AuthUser.email}`,
  //       name: `${AuthUser.displayName}`
  //     })
  //     CreateUser(dispatch, `${AuthUser.id}`, user)
  //   } else {
  //     console.log('no se creara un nuevo usuario con este id')
  //   }
  // }

  useEffect(() => {
    TestUser(dispatch, infoUser, setUser, user)
  }, [])
  return (
    <LayoutDashboard>
      <div className='w-full p-2'>
        <div className='bg-red-400 p-3'>
          <div className='flex p-3 items-center justify-center'>
            <img src={`${AuthUser?.photoURL}`} alt="photo" />
            <p>Your email is {AuthUser.email ? AuthUser.email : 'unknown'}.</p>
          </div>
          <div className='flex items-center justify-center'>
            <button className="rounded-md bg-blue-400 text-center font-semibold text-white p-3 capitalize shadow-lg" onClick={() => AuthUser.signOut()}>logout</button>
          </div>
        </div>
        {/* <div>
          {userData &&
            userData.map((item: any, index: number) => {
              return (
                <ul className='grid gap-2 grid-cols-3 my-5'>
                  {item.decks &&
                    item.decks.map((deck: any, index: number) => {
                      return (
                        <li className='rounded-lg bg-green-500 text-white font-semibold p-2'>
                          <h2 className='capitalize text-center font-semibold'>{deck.title}</h2>
                          <div className='flex items-center justify-center'>
                            <button className='p-1 rounded-lg bg-yellow-500 text-back font-semibold '>add card</button>
                          </div>
                        </li>

                      )
                    })
                  }
                </ul>
              )
            })
          }
        </div> */}
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

{/* <p onClick={() => setShowAnswer(!showAnswer)}>{deck.pregunta}</p>
                              {
                                showAnswer &&
                                <p>{deck.respuesta}</p>
                              }  */}