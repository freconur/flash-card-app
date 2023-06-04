import React, { useEffect, useReducer } from 'react'
import { DecksInitial, DecksReducer } from '../../Reducer/Decks.reducer'
import { MyDecksUser } from '../../Reducer/UserDecks'
import { authApp } from '../../firebase/firebase.config';
import { getAuth } from 'firebase/auth';
import ListDecks from './ListDecks';

const DecksUser = () => {
  const auth = getAuth(authApp);
  const [state, dispatch] = useReducer(DecksReducer, DecksInitial)
  const { decksUser } = state
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('authUser', authUser)
      MyDecksUser(dispatch, `${authUser?.uid}`)
    })
  }, [])
  console.log('decksUser', decksUser)
  return (
    <ListDecks decksUser={decksUser}/>
  )
}

export default DecksUser
