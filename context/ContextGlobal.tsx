import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { DecksInitial } from "../Reducer/Decks.reducer";
import { DecksReducer } from "../Reducer/Decks.reducer";
import { GetFlashCardsFromDecks, MyDecksUser } from "../Reducer/UserDecks";
import { currentlyDeckDatas, flascardsOnSnapshot, updateFlashCard } from "../Reducer/UserFlashCards";

interface Props {
  children: React.ReactNode
}

type GlobalContextProps = {
  globalData: DecksDataGlobal,
  TestId: (id: string) => void,
  SelectDeck: (deck: DecksUser | undefined, idUser: string, decksUser: DecksUser[]) => void,
  DecksUserContext: (deckIdUser: string) => void,
  updateDeckShow: () => void,
  DataToDeckUpdate: (deck: DecksUser) => void,
  deckToUpdate: DecksUser,
  handleUpdateFlashCardTest: (idUser: string, deckData: DecksUser | string | undefined, currentlyValuesFlashcard: Flashcards | undefined) => void,
  OnSnapshotFlashcards: (idUser: string, idDeck: string) => void,
  getAllIdUser:(idUser:string, idDeck:string) => void,
  flashcardIndexContext:(index:number) => void,
  getDataCurrentlyDeck:(idUser:string, idDeck:string) => void
}
//crear el contexto
export const GlobalContext = createContext<GlobalContextProps>({} as GlobalContextProps)

//2. crear el provider para prover el contexto
export function GlobalProvider({ children }: Props) {
  const [globalData, dispatch] = useReducer(DecksReducer, DecksInitial)
  const { settingsDeck, deckToUpdate } = globalData

  const TestId = (id: string) => {
    dispatch({ type: "idUser", payload: id })
  }
  const SelectDeck = (deck: DecksUser | undefined, idUser: string, decksUser: DecksUser[]) => {
    GetFlashCardsFromDecks(dispatch, deck, idUser, decksUser)
  }
  const DecksUserContext = (deckIdUser: string) => {
    MyDecksUser(dispatch, deckIdUser)
  }
  const OnSnapshotFlashcards = (idUser: string, idDeck: string) => {
    flascardsOnSnapshot(dispatch, idUser, idDeck)
  }
  const getAllIdUser = (idUser:string, idDeck:string) => {
  dispatch({ type: "getAllIdUser", payload:idUser, payload2:idDeck})
  }
  const handleUpdateFlashCardTest = (idUser: string, deckData: DecksUser | string | undefined, currentlyValuesFlashcard: Flashcards | undefined) => {
    updateFlashCard(idUser, deckData, currentlyValuesFlashcard)
  }
  const flashcardIndexContext = (index:number) => {
    dispatch({type:"flashcardIndex", payload:index})
  }
  const updateDeckShow = () => {
    if (settingsDeck === false) dispatch({ type: "settingsDeck", payload: true })
    if (settingsDeck === true) dispatch({ type: "settingsDeck", payload: false })
  }
  const DataToDeckUpdate = (deck: DecksUser) => {
    dispatch({ type: "deckToUpdate", payload: deck })
  }
  const getDataCurrentlyDeck = (idUser:string, idDeck:string) => {
    currentlyDeckDatas(dispatch,idUser, idDeck)
  }
  return (
    <GlobalContext.Provider value={{
      globalData,
      TestId,
      SelectDeck,
      DecksUserContext,
      updateDeckShow,
      DataToDeckUpdate,
      deckToUpdate,
      handleUpdateFlashCardTest,
      OnSnapshotFlashcards,
      getAllIdUser,
      flashcardIndexContext,
      getDataCurrentlyDeck
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext);
