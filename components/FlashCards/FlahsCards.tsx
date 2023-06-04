import React, { useEffect, useReducer } from 'react'
import { FlashCardsInit } from '../../Reducer/UserDecks'
import { DecksInitial, DecksReducer } from '../../Reducer/Decks.reducer'


interface Props {
  idUser:string
}
const FlahsCards = ({idUser}:Props) => {

  const [state, dispatch] = useReducer(DecksReducer, DecksInitial)
  const { userCards } = state
  useEffect(() => {
    FlashCardsInit(dispatch, idUser)
  }, [])
  console.log('rta', userCards)
  return (
    <div>
      <ul className='grid grid-cols-2'>
        {
          userCards &&
          userCards.map(card => {
            return (
              <li className='' key={card.id}>
                <p>Pregunta: {card.pregunta}</p>
                <p>Respuesta: {card.respuesta}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default FlahsCards