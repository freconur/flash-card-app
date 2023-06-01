
type Decks =
  | { type: "getUser"; payload: user }
  | { type: "userCurrent"; payload: string | null}


export const DecksInitial = {
  user: {} as user,
  userCurrent: "" as string | null ,
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
      case "userCurrent":
        return {
          ...state,
          userCurrent: action.payload
        }
        
  }
}