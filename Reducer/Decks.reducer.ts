
type Decks =
  | { type: "getUser"; payload: user }
  | { type: "userCurrent"; payload: string | null }
  | { type: "userData"; payload: any }


export const DecksInitial = {
  user: {} as user,
  userCurrent: "" as string | null,
  userGoogle: [],
  userData: []
}

export const DecksReducer = (state: typeof DecksInitial, action: Decks) => {
  switch (action.type) {
    case "getUser":
      return {
        ...state,
        user: action.payload,
      }
    case "userCurrent":
      return {
        ...state,
        userCurrent: action.payload
      }
    case "userData":
      return {
        ...state,
        userData: action.payload
      }
  }
}