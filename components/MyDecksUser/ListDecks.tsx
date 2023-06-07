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
  useEffect(() => {
    if (document.getElementById('0')) {
      document.getElementById('0')?.click()
      document.getElementById('0')?.focus()
    }
  }, [decksUser])

  //usare el localstorage para pasarle estos valores a la pagina de flashcards y actualizarlo acada vez que algun valor en local storage cambie
  return (
    <div>
      <ul className='grid gap-3 py-4'>
        {
          decksUser &&
          decksUser.map((decks, index) => {
            // setfirst(true)
            return (

              <button id={`${index}`}
                onClick={() => SelectDeck(`${decks?.id}`, idUser)}
                // className={`cursor-pointer border-l-4  border-green-400 rounded-lg bg-slate-700 h-[80px] p-2 text-white font-semibold  focus:border-yellow-500 focus:border-4 focus:border-l-4 overflow-hidden focus:duration-500 `}
                className='bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 p-[2px] h-[100px] rounded-md 
                focus:bg-gradient-to-r  focus:from-yellow-400 focus:via-orange-500 focus:to-red-500 focus:pl-[5px]'
                key={decks.id}>
                <h3 className= 'flex items-center justify-center capitalize font-semibold rounded-md overflow-hidden w-full h-full bg-slate-800'>
                  {decks.title}
                </h3>
              </button>
            )
          })
        }
      </ul>
    </div>
  )
}
export default ListDecks