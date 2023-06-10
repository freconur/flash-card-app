import { createContext, useContext, useReducer } from "react";
import { DecksInitial } from "../Reducer/Decks.reducer";
import { DecksReducer } from "../Reducer/Decks.reducer";
import { GetFlashCardsFromDecks, MyDecksUser } from "../Reducer/UserDecks";
import { useSelectColors } from "../Hooks/useSelectColor";

interface Props {
  children: React.ReactNode
}

type GlobalContextProps = {
  globalData: DecksDataGlobal,
  TestId: (id: string) => void,
  SelectDeck: (deckId: string, id: string, decksUser: DecksUser[]) => void,
  DecksUserContext: (deckIdUser: string) => void,
  // newValuesColors: UseSelectColor[] | undefined
  pruebita: (id: string) => UseSelectColor[] | undefined
}
//crear el contexto
export const GlobalContext = createContext<GlobalContextProps>({} as GlobalContextProps)

//2. crear el provider para prover el contexto
export function GlobalProvider({ children }: Props) {
  const [globalData, dispatch] = useReducer(DecksReducer, DecksInitial)

  const pruebita = (id: string) => {
    const { newValuesColors } = useSelectColors(id)
    return newValuesColors
  }
  const TestId = (id: string) => {
    dispatch({ type: "idUser", payload: id })
  }
  const SelectDeck = (deckId: string, id: string, decksUser: DecksUser[]) => {
    GetFlashCardsFromDecks(dispatch, id, deckId, decksUser)
  }
  const DecksUserContext = (deckIdUser: string) => {
    MyDecksUser(dispatch, deckIdUser)
  }
  return (
    <GlobalContext.Provider value={{
      globalData,
      pruebita,
      TestId,
      SelectDeck,
      DecksUserContext,
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext);
