import { createContext, useContext, useReducer } from "react";
import { DecksInitial } from "../Reducer/Decks.reducer";
import { DecksReducer } from "../Reducer/Decks.reducer";
import { GetFlashCardsFromDecks } from "../Reducer/UserDecks";

interface Props {
  children: React.ReactNode
}

type GlobalContextProps = {
  globalData: DecksDataGlobal,
  TestId: (id:string) => void,
  SelectDeck: (deckId:string,id:string,focusdeck:boolean) => void
}
//crear el contexto
export const GlobalContext = createContext<GlobalContextProps>({} as GlobalContextProps) 

//2. crear el provider para prover el contexto
export function GlobalProvider ({children}:Props) {
  const [globalData, dispatch] = useReducer(DecksReducer,DecksInitial)
  const TestId = (id:string) => {
    dispatch({type:"idUser", payload:id})
  }
  const SelectDeck = (deckId:string,id:string, focusdeck:boolean) => {
    GetFlashCardsFromDecks(dispatch, id, deckId,focusdeck)
  }
  return (
    <GlobalContext.Provider value={{
      globalData,
      TestId,
      SelectDeck,
      }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext);
