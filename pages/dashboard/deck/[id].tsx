
'use client'
import { GetServerSideProps } from 'next';
import React, { useEffect, useState } from 'react'
import { flashcardFromDeck } from '../../../Reducer/UserFlashCards';
import { AuthAction, useAuthUser, withAuthUser, withAuthUserTokenSSR } from 'next-firebase-auth';
import { RiArrowDownSLine } from "react-icons/ri";
import { useGlobalContext } from '../../../context/ContextGlobal';
import { useRouter } from 'next/router';
import { RiEdit2Fill } from "react-icons/ri";
import { RiDeleteBin6Fill } from "react-icons/ri";
import UpdateFlashcardModal from '../../../modal/UpdateFlashcardModal';
import { decksUserById } from '../../../Reducer/UserDecks';

type Props = {
  flashcards: Flashcards[]
  idDeck: Flashcards[]
}

export const getServerSideProps: GetServerSideProps = withAuthUserTokenSSR()(async ({ AuthUser, query }) => {
  const idDeck = query?.id as string
  const idUser = AuthUser.id as string
  const flashcards = await flashcardFromDeck(idUser, idDeck)
  return { props: { } }
})

const FlashcardsToPractice = () => {
  const { OnSnapshotFlashcards, globalData, getAllIdUser, flashcardIndexContext, getDataCurrentlyDeck } = useGlobalContext()
  const AuthUser = useAuthUser()
  const idUsers = AuthUser.id as string
  const { query } = useRouter()
  const idDecks = query.id as string
  const { flashcardsOnSanpshot, flashcardIndex, currentlyDeckData } = globalData
  const [selectedIndex, setSelectedIndex] = useState<number>(9999)
  const [showRespuesta, setShowRespuesta] = useState<boolean>(false)
  const [showModalUpdateFlashcard, setShowModalUpdateFlashcard] = useState<boolean>(false)

  const selectFlashcard = (index: number, selectFlashcard: Flashcards[], next = true) => {
    const condition = next ? index < selectFlashcard.length - 1 : index > 0
    const nextIndex = next ? condition ? index + 1 : 0 : condition ? index - 1 : selectFlashcard.length - 1
    setSelectedIndex(nextIndex)
    flashcardIndexContext(nextIndex)
    decksUserById(idUsers, idDecks, nextIndex)
  }
  useEffect(() => {
    getDataCurrentlyDeck(idUsers, idDecks)
    getAllIdUser(idUsers, idDecks)
    OnSnapshotFlashcards(idUsers, idDecks)
  }, [selectedIndex])

  const prev = () => {
    if (selectedIndex === 9999) {
      selectFlashcard(currentlyDeckData.index as number, flashcardsOnSanpshot, false)
      OnSnapshotFlashcards(idUsers, idDecks)
    } else {
      selectFlashcard(selectedIndex, flashcardsOnSanpshot, false)
      OnSnapshotFlashcards(idUsers, idDecks)
    }
  }
  const next = () => {
    if (selectedIndex === 9999) {
      selectFlashcard(currentlyDeckData.index as number, flashcardsOnSanpshot)
      OnSnapshotFlashcards(idUsers, idDecks)
    } else {
      selectFlashcard(selectedIndex, flashcardsOnSanpshot)
      OnSnapshotFlashcards(idUsers, idDecks)
    }
  }
  const handleShowRespuesta = () => {
    setShowRespuesta(false)
  }
  return (
    <>
      {
        showModalUpdateFlashcard &&
        <UpdateFlashcardModal flascardData={flashcardsOnSanpshot[flashcardIndex]} showModalUpdateFlashcard={showModalUpdateFlashcard} setShowModalUpdateFlashcard={setShowModalUpdateFlashcard} />
      }
      {flashcardsOnSanpshot
        &&
        <div className='bg-secundary h-altura flex justify-center items-center'>

          <div className='relative z-40 h-[80%] w-[80%] bg-background-flashcards border-[1px] border-slate-100 rounded-md'>
            <div className="flex justify-end items-center gap-3 m-5">
              <RiEdit2Fill onClick={() => setShowModalUpdateFlashcard(!showModalUpdateFlashcard)} className='text-gray-300 hover:text-gray-100 font-semibold text-xl' />
              <RiDeleteBin6Fill className='text-gray-300 hover:text-gray-100 font-semibold text-xl' />
            </div>
            <div className='flex w-[100%] p-5 justify-center items-center h-[45%]'>
              <h3 className='text-center text-slate-300 text-3xl'>
                {flashcardsOnSanpshot[selectedIndex === 9999 ? currentlyDeckData.index as number : selectedIndex]?.pregunta}
              </h3>
            </div>
            {showRespuesta &&
              <div className='border-t-[1px] border-slate-300 m-auto w-[80%]'></div>
            }
            <div className={`flex w-[100%] p-5 justify-center items-center h-[45%] `}>
              {showRespuesta === false &&
                <h3 className='cursor-pointer text-xl text-cyan-500 font-semibold' onClick={() => setShowRespuesta(!showRespuesta)}>mostrar respuesta</h3>
              }
              {showRespuesta
                &&
                <h3 onClick={() => setShowRespuesta(!showRespuesta)} className='w-full h-full flex justify-center items-center text-center text-3xl text-slate-300'>
                  {flashcardsOnSanpshot[selectedIndex === 9999 ? currentlyDeckData.index as number : selectedIndex]?.respuesta}
                </h3>
              }
            </div>


            <div
              onClick={() => { prev(), handleShowRespuesta() }}
              className="absolute hover:opacity-60 duration-300 cursor-pointer left-[20px] top-[350px] z-60 rounded-full rotate-90 bg-gray-100 hover:bg-white"
            >
              <RiArrowDownSLine className="text-3xl" />
            </div>
            <div
              onClick={() => { next(), handleShowRespuesta() }}
              className="absolute hover:opacity-60 duration-300 cursor-pointer right-[20px] top-[350px] z-60  rounded-full -rotate-90 bg-gray-100 hover:bg-white"
            >
              <RiArrowDownSLine className="text-3xl" />
            </div>
          </div>

        </div>
      }
    </>
  )
}
export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN
})(FlashcardsToPractice)
