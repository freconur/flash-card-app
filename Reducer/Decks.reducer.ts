
type Decks =
  | { type: "getUser"; payload: user }
  | { type: "currentUsera"; payload: string | null}


export const DecksInitial = {
  user: {} as user,
  currentUsera: "" as string | null ,
  userGoogle: []
}

export const DecksReducer = (state: typeof DecksInitial, action: Decks) => {
  switch(action.type) {
    case "getUser":
      return {
        ...state,
        user: action.payload,
        // currentUser: action.payload
      }
      case "currentUsera":
        return {
          ...state,
          currentUsera: action.payload
        }
  }
}