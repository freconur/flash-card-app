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
  const { TestId, DecksUserContext, globalData } = context
  const { decksUser } = globalData
  const [idUser, setIdUser] = useState<string>("")
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      TestId(`${authUser?.uid}`)
      setIdUser(`${authUser?.uid}`)
      DecksUserContext(`${authUser?.uid}`)//global
    })
  }, [])
  console.log('decksUser',decksUser)
  return (
    <div>
      <ListDecks idUser={idUser} decksUser={decksUser} />
    </div>
  )
}

export default DecksUser
