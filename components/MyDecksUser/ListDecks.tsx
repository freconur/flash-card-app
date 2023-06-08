import React, { useEffect, useReducer, useRef, useState } from 'react'
import { useGlobalContext } from '../../context/ContextGlobal'
import css from 'styled-jsx/css'

interface Props {
  decksUser: DecksUser[],
  idUser: string
}
const ListDecks = ({ decksUser, idUser }: Props) => {
  const context = useGlobalContext()
  const { SelectDeck } = context
  //usare el localstorage para pasarle estos valores a la pagina de flashcards y actualizarlo acada vez que algun valor en local storage cambie
  return (
    <div className=''>
      <ul className='grid gap-3 py-4'>
        {
          decksUser &&
          decksUser.map((decks, index) => {
            // setfirst(true)
            return (
              <div id={`${index}`}
                onClick={() => SelectDeck(`${decks?.id}`, idUser, decksUser)}
                className={`${decks.focus ? "bg-gradient-to-r from-yellow-500 from-10% via-orange-300 via-30% to-pink-600 to-90% p-[1px] border-transparent" : "bg-gradient-to-t from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% border-[0.9px] border-gray-400"}   pl-[5px] h-[100px] rounded-md cursor-pointer `}
                key={decks.id}>
                <div className='flex items-center justify-center rounded-md overflow-hidden w-full h-full bg-slate-800 '>
                  <h3 className='capitalize font-semibold '>
                    {decks.title}
                  </h3>
                </div>
              </div>
            )
          })
        }
      </ul>
    </div>
  )
}
export default ListDecks