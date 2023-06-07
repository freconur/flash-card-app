import React, { useEffect, useReducer, useState } from 'react'
import { FlashCardsInit, FlashcardsLocalstorage } from '../../Reducer/UserDecks'
import { DecksInitial, DecksReducer } from '../../Reducer/Decks.reducer'
import { useGlobalContext } from '../../context/ContextGlobal'


interface Props {
  idUser: string
}
const FlahsCards = ({ idUser }: Props) => {
  const { globalData, TestId } = useGlobalContext()

  const { getFlashcardsFromDecks } = globalData
  // const AuthUser = useAuthUser()

  const [state, dispatch] = useReducer(DecksReducer, DecksInitial)
  const { userCards } = state
  useEffect(() => {
    // FlashCardsInit(dispatch, `${idUser}`,)
    // testCards()
    console.log('globalData', globalData)
  }, [])

  const testCards = () => {
    return (
      <>
      <h1>holi</h1>
      <ul>
        {
          getFlashcardsFromDecks &&
          getFlashcardsFromDecks.map(card => {
            return (
              <li className='' key={card.id}>
                <p>Pregunta: {card.pregunta}</p>
                <p>Respuesta: {card.respuesta}</p>
              </li>
            )
          })
        }
      </ul>
      </>
    )
  }
  return (
    <div className='p-3'>
      <ul className='grid grid-cols-3 gap-5'>
        {
          getFlashcardsFromDecks &&
          getFlashcardsFromDecks.map(card => {
            return (
              <li className='rounded-md border-[1px] border-slate-300 text-slate-300 p-3 h-[200px] cursor-pointer' key={card.id}>
                <p>Pregunta: {card.pregunta}</p>
                {/* <p>Respuesta: {card.respuesta}</p> */}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default FlahsCards