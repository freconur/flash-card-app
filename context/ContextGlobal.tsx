import { createContext, useContext, useReducer, useState } from "react";
import { DecksInitial } from "../Reducer/Decks.reducer";
import { DecksReducer } from "../Reducer/Decks.reducer";
import { GetFlashCardsFromDecks, MyDecksUser } from "../Reducer/UserDecks";

interface Props {
  children: React.ReactNode
}

type GlobalContextProps = {
  globalData: DecksDataGlobal,
  TestId: (id: string) => void,
  SelectDeck: (deckId: string, id: string, decksUser: DecksUser[]) => void,
  DecksUserContext: (deckIdUser: string) => void,
  updateDeckShow: () => void,
  DataToDeckUpdate: (deck:DecksUser ) => void,
  deckToUpdate:DecksUser,
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
  const SelectDeck = (deckId: string, id: string, decksUser: DecksUser[]) => {
    GetFlashCardsFromDecks(dispatch, id, deckId, decksUser)
  }
  const DecksUserContext = (deckIdUser: string) => {
    MyDecksUser(dispatch, deckIdUser)
  }
  const updateDeckShow = () => {
    if(settingsDeck === false) dispatch({type:"settingsDeck", payload:true})
    if(settingsDeck === true) dispatch({type:"settingsDeck", payload:false})
  }
  const DataToDeckUpdate = (deck:DecksUser) => {
      dispatch({type:"deckToUpdate", payload:deck })
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
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext);
