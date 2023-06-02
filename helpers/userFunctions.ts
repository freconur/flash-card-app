import { CreateUser, ValidateUser } from "../Reducer/UserDecks"

export async function TestUser(dispatch:(actioni:any)=>void, authUser:UserData, setUser:React.Dispatch<React.SetStateAction<UserData>>, user:UserData) {
  // const rta: boolean = await ValidateUser(dispatch, `${AuthUser.id}`)
  const rta: boolean = await ValidateUser(dispatch, `${authUser.id}`)
  if (rta === false) {
    setUser({
      // ...user,
      decks: "",
      email: `${authUser.email}`,
      name: `${authUser.name}`
    })
    CreateUser(dispatch, `${authUser.id}`, user)
  } else {
    console.log('no se creara un nuevo usuario con este id')
  }
} 