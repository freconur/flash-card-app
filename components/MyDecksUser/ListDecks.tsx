import React, { useEffect, useReducer, useRef, useState } from 'react'
import { useGlobalContext } from '../../context/ContextGlobal'
import css from 'styled-jsx/css'
import { RiMore2Fill } from "react-icons/ri";
import { RxPlus } from "react-icons/rx";
import { COLOR_TO_DECK } from '../../utils/colorToDeck';
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
                // className={`${decks.focus ? "bg-gradient-to-r from-yellow-500 from-10% via-orange-300 via-30% to-pink-600 to-90% p-[1px] border-transparent" : "bg-gradient-to-t from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% border-[0.9px] border-gray-400"}   pl-[5px]  rounded-md cursor-pointer `}
                // className={`${decks && `p-[.5px] bg-gradient-to-r from-${decks[colorDeck].} to-${decks?.secondColorDeck}` }`}
                // className={`${decks?.colorDeck && COLOR_TO_DECK[Number(decks?.colorDeck)]} ${decks?.focus ? "p-[2px] pl-2": "border-t-[0.5px] border-b-[0.5px] border-r-[0.5px] border-gray-400 pl-2"}  rounded-md`}
                className={`${decks?.colorDeck && COLOR_TO_DECK[Number(decks?.colorDeck)]} ${decks?.focus ? "p-[1.5px] pl-2" : "pl-2"}  rounded-md`}
                key={decks.id}>
                {/* <div className='p-2 pl-5 rounded-md overflow-hidden w-full h-full bg-slate-800'> */}
                <div className={`p-2 pl-5 rounded-r-md overflow-hidden w-full h-full bg-slate-800  ${decks?.focus ? "" : "border-gray-400 border-t-[0.1px] border-r-[0.1px] border-b-[0.1px]"}`}>
                  <div className='flex justify-between'>
                    <h3 className='capitalize font-semibold text-lg'>
                      {decks.title}
                    </h3>
                    <RiMore2Fill className='text-xl mt-1 font-bold' />
                  </div>
                  <div className='my-2'>
                    <span className='text-gray-200 text-sm capitalize'>2 flashcards</span>
                  </div>
                  <div className='hover:border-gray-400 border-[0.1px] w-full border-gray-500 rounded-md p-1 flex justify-center capitalize font-semibold text-sm items-center gap-2'>
                    <RxPlus className='font-light text-lg text-slate-50' />
                    <span className='text-slate-50'>agregar tarjetas</span>
                  </div>
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