import React, { useEffect, useReducer, useState } from 'react'
import { DecksInitial, DecksReducer } from '../../Reducer/Decks.reducer'
import { MyDecksUser } from '../../Reducer/UserDecks'
import { authApp } from '../../firebase/firebase.config';
import { getAuth } from 'firebase/auth';
import ListDecks from './ListDecks';
import { useGlobalContext } from '../../context/ContextGlobal';

const DecksUser = () => {
  const auth = getAuth(authApp);
  const context = useGlobalContext()
  const { TestId } = context
  const [state, dispatch] = useReducer(DecksReducer, DecksInitial)
  const { decksUser } = state
  const [idUser, setIdUser] = useState<string>("")
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      TestId(`${authUser?.uid}`)
      setIdUser(`${authUser?.uid}`)
      MyDecksUser(dispatch, `${authUser?.uid}`)
    })
  }, [])
  return (
    <ListDecks idUser={idUser} decksUser={decksUser}/>
  )
}

export default DecksUser
