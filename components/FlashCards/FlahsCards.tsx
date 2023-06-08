import React, { useEffect, useReducer, useState } from 'react'
import { DecksInitial, DecksReducer } from '../../Reducer/Decks.reducer'
import { useGlobalContext } from '../../context/ContextGlobal'


interface Props {
  idUser: string
}
const FlahsCards = ({ idUser }: Props) => {
  const { globalData,  } = useGlobalContext()
  const { getFlashcardsFromDecks } = globalData
  
  return (
    <div className='p-3 h-altura'>
      <ul className='grid grid-cols-3 gap-5'>
        {
          getFlashcardsFromDecks &&
          getFlashcardsFromDecks.map(card => {
            return (
              <li className='rounded-md border-[0.1px] border-gray-400 text-slate-300 p-3 h-[200px] cursor-pointer' key={card.id}>
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