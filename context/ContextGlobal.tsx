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
  updateDeckActive: boolean,
  setUpdateDeckActive: React.Dispatch<React.SetStateAction<boolean>>,
  updateDeckShow: () => void
}
//crear el contexto
export const GlobalContext = createContext<GlobalContextProps>({} as GlobalContextProps)

//2. crear el provider para prover el contexto
export function GlobalProvider({ children }: Props) {
  const [globalData, dispatch] = useReducer(DecksReducer, DecksInitial)
  const [updateDeckActive, setUpdateDeckActive] = useState<boolean>(false)
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
    setUpdateDeckActive(!updateDeckActive)
    // dispatch({type:"updateDeckActiveTest", payload:})
    // return updateDeckActive
  }
  return (
    <GlobalContext.Provider value={{
      globalData,
      TestId,
      SelectDeck,
      DecksUserContext,
      setUpdateDeckActive,
      updateDeckActive,
      updateDeckShow
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext);
