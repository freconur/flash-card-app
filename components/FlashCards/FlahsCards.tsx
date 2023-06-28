import { useEffect, useState } from 'react';
import { useGlobalContext } from '../../context/ContextGlobal'
import { RiEdit2Fill } from "react-icons/ri";
import { RiDeleteBin6Fill } from "react-icons/ri";
import UpdateFlashcardModal from '../../modal/UpdateFlashcardModal';

const FlahsCards = () => {
  const { globalData } = useGlobalContext()
  const { getFlashcardsFromDecks, getTitleFromDeck } = globalData
  const [showModalUpdateFlashcard, setShowModalUpdateFlashcard] = useState<boolean>(false)
  const [flascardData, setFlascardData] = useState<Flashcards>()

  console.log('globalData', globalData)
  console.log('getFlashcardsFromDecks',getFlashcardsFromDecks)
  return (
    <>
    <div className='p-3 h-altura'>
      <h2 className='text-slate-200 font-semibold text-xl capitalize'>Mi deck {getTitleFromDeck}</h2>
      {/* queda pendiente traer el dato del title del deck asignado */}
      <ul className='grid grid-cols-4 gap-5'>
        {
          getFlashcardsFromDecks?.map((card,index) => {
            return (
              <li key={index} className='rounded-md border-[0.1px] border-gray-400 text-slate-300 p-3 h-[200px] cursor-pointer px-5'>
                <div className="flex justify-end items-center gap-3 m-1">
                  <RiEdit2Fill onClick={()=>{setShowModalUpdateFlashcard(!showModalUpdateFlashcard); setFlascardData(card)}} className='text-gray-300 hover:text-gray-100 font-semibold text-md' />
                  {/* <RiEdit2Fill onClick={() => handleUpdateFlashCard(idUser, currentlyDecks)} className='text-gray-300 hover:text-gray-100 font-semibold text-md' /> */}
                  <RiDeleteBin6Fill className='text-gray-300 hover:text-gray-100 font-semibold text-md' />
                </div>
                <p>{card.pregunta}</p>
                {/* <p>Respuesta: {card.respuesta}</p> */}
              </li>
            )
          })
        }
      </ul>
    </div>
    {
      showModalUpdateFlashcard && 
      <UpdateFlashcardModal flascardData={flascardData} setShowModalUpdateFlashcard={setShowModalUpdateFlashcard} showModalUpdateFlashcard={showModalUpdateFlashcard}/>
      }
    </>
  )
}

export default FlahsCards