import { useEffect, useState } from 'react';
import { useGlobalContext } from '../../context/ContextGlobal'
import { RiEdit2Fill } from "react-icons/ri";
import { RiDeleteBin6Fill } from "react-icons/ri";
import UpdateFlashcardModal from '../../modal/UpdateFlashcardModal';
import DeleteFlashcardModal from '../../modal/DeleteFlashcardModal';
import Link from 'next/link';

const FlahsCards = () => {
  const { globalData } = useGlobalContext()
  const { getFlashcardsFromDecks, getTitleFromDeck, currentlyDeck, idUser } = globalData
  const [showModalUpdateFlashcard, setShowModalUpdateFlashcard] = useState<boolean>(false)
  const [showModalDeleteFlashcard, setShowModalDeleteFlashcard] = useState<boolean>(false)
  const [flascardData, setFlascardData] = useState<Flashcards>()

  return (
    <>
      <div className='p-3 h-altura'>
        <h2 className='text-slate-200 mb-5 mt-2 font-semibold text-xl capitalize'>Mi deck {getTitleFromDeck}</h2>
        {/* queda pendiente traer el dato del title del deck asignado */}
        <ul className='grid grid-cols-3 gap-5'>
          {
            getFlashcardsFromDecks?.map((card, index) => {
              return (
                <li key={index} className='rounded-md border-[0.1px] border-gray-400 text-slate-300 p-3 h-[200px] cursor-pointer px-5'>
                    <div className="flex justify-end items-center gap-3 m-1">
                      <RiEdit2Fill onClick={() => { setShowModalUpdateFlashcard(!showModalUpdateFlashcard); setFlascardData(card) }} className='text-gray-300 hover:text-gray-100 font-semibold text-md' />
                      {/* <RiEdit2Fill onClick={() => handleUpdateFlashCard(idUser, currentlyDecks)} className='text-gray-300 hover:text-gray-100 font-semibold text-md' /> */}
                      <RiDeleteBin6Fill onClick={() => { setShowModalDeleteFlashcard(!showModalDeleteFlashcard); setFlascardData(card) }} className='text-gray-300 hover:text-gray-100 font-semibold text-md' />
                    </div>
                  <Link className='relative z-10' href={`/dashboard/deck/${currentlyDeck?.id}`}>
                    <p className='h-full w-full'>{card.pregunta}</p>
                    {/* <p>Respuesta: {card.respuesta}</p> */}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
      {
        showModalUpdateFlashcard &&
        <UpdateFlashcardModal flascardData={flascardData} setShowModalUpdateFlashcard={setShowModalUpdateFlashcard} showModalUpdateFlashcard={showModalUpdateFlashcard} />
      }
      {
        showModalDeleteFlashcard &&
        <DeleteFlashcardModal flascardData={flascardData} currentlyDeck={currentlyDeck} idUser={idUser} showModalDeleteFlashcard={showModalDeleteFlashcard} setShowModalDeleteFlashcard={setShowModalDeleteFlashcard} />
      }
    </>
  )
}

export default FlahsCards