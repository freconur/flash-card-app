
type Decks =
  | { type: "idUser"; payload:string}
  | { type: "getDecksUser"; payload:DecksUser[]}
  | { type: "userCards"; payload:Flashcards[]}
  | { type: "getFlashcardsFromDecks"; payload:Flashcards[]}
  | { type: "localStorageValues"; payload:string | null}
  | { type: "conditionalValue"; payload:number}
  


export const DecksInitial = {
  idUser: "" as string,
  decksUser: [] as DecksUser[],
  copyDecks: [] as DecksUser[],
  userCards: [] as Flashcards[],
  getFlashcardsFromDecks: [] as Flashcards[],
  localStorageValues: "" as string | null,
  conditionalValue: 0 as number,
}

export const DecksReducer = (state: DecksDataGlobal, action: Decks) => {
  switch (action.type) {
      case "idUser": {
        return {
          ...state,
          idUser: action.payload
        }
      }
      case "getDecksUser": {
        const copy= {...action.payload}
        return {
          ...state,
          decksUser:action.payload,
          copyDecks: copy
        }
      }
      case "userCards":{
        return {
          ...state,
          userCards:action.payload
        }
      }
      case "getFlashcardsFromDecks": {
        return {
          ...state,
          getFlashcardsFromDecks: action.payload
        }
      }
      case "localStorageValues": {
        // console.log('localStorageValues', action.payload)
        return {
          ...state,
          localStorageValues:action.payload
        }
      }
      case "conditionalValue": {
          return {
            ...state,
            conditionalValue: action.payload + 1
          }
      }
  }
}