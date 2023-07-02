import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../../context/ContextGlobal'

const Deck = () => {
  const { globalData } = useGlobalContext()
  const { getFlashcardsFromDecks } = globalData
  const [showRespuestaFlashcard, setShowRespuestaFlashcard] = useState<boolean>(false)
  console.log('globalData',globalData)
  console.log('getFlashcardsFromDecks', getFlashcardsFromDecks)

  useEffect(() => {

  },[getFlashcardsFromDecks])
  return (
    <div className='bg-background-flashcards h-altura '>
      <h1 className='text-gray-100'>aqui estudiaremos todas nuestras tarjetas</h1>
      <div>
        <ul>
          {
            getFlashcardsFromDecks?.map(flashcard => {
              return (
                <li>
                  <div>
                    {flashcard.pregunta}
                  </div>
                  <div className={``}>
                    <h4>mostar respuesta</h4>
                    <div className={`${ showRespuestaFlashcard ? 'block' : 'hidden' }`}>
                    <p >
                      {flashcard.respuesta}
                    </p>

                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Deck