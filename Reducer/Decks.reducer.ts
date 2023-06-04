
type Decks =
  // | { type: "getUser"; payload: user }
  | { type: "idUser"; payload:string}
  | { type: "getDecksUser"; payload:DecksUser[]}
  | { type: "userCards"; payload:Flashcards[]}
  // | { type: "userCurrent"; payload: string | null }
  // | { type: "userData"; payload: any }


export const DecksInitial = {
  // user: {} as user,
  idUser: "" as string,
  decksUser: [] as DecksUser[],
  userCards: [] as Flashcards[]
}

export const DecksReducer = (state: typeof DecksInitial, action: Decks) => {
  switch (action.type) {
    // case "getUser":
    //   return {
    //     ...state,
    //     user: action.payload,
    //   }
      case "idUser": {
        return {
          ...state,
          idUser: action.payload
        }
      }
      case "getDecksUser": {
        return {
          ...state,
          decksUser:action.payload
        }
      }
      case "userCards":{
        return {
          ...state,
          userCards:action.payload
        }
      }
  }
}