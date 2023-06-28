
type Decks =
  | { type: "idUser"; payload:string}
  | { type: "getDecksUser"; payload:DecksUser[]}
  | { type: "userCards"; payload:Flashcards[]}
  | { type: "getFlashcardsFromDecks"; payload:Flashcards[], payload2:string, payload3:DecksUser}
  | { type: "localStorageValues"; payload:string | null}
  | { type: "conditionalValue"; payload:number}
  | { type: "settingsDeck"; payload:boolean}
  | { type: "deckToUpdate"; payload:DecksUser}
  


export const DecksInitial = {
  idUser: "" as string,
  decksUser: [] as DecksUser[],
  userCards: [] as Flashcards[],
  getFlashcardsFromDecks: [] as Flashcards[],
  localStorageValues: "" as string | null,
  conditionalValue: 0 as number,
  settingsDeck: false as boolean,
  deckToUpdate: {} as DecksUser,
  getTitleFromDeck: '' as string,
  currentlyDeck:{} as DecksUser
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
        return {
          ...state,
          decksUser:action.payload,
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
          getFlashcardsFromDecks: action.payload,
          getTitleFromDeck: action.payload2,
          currentlyDeck:action.payload3
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
      case "settingsDeck": {
        return {
          ...state,
          settingsDeck:action.payload
        }
      }
      case "deckToUpdate": {
        return {
          ...state,
          deckToUpdate:action.payload
        }
      }
  }
}