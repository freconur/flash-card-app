import { CreateUser, ValidateUser } from "../Reducer/UserDecks"

export async function TestUser(dispatch:(actioni:any)=>void, authUser:UserData) {
  const rta: boolean = await ValidateUser(dispatch, `${authUser.id}`)
  if (rta === false) {
    const infoUser = {
      decks: "",
      email: `${authUser.email}`,
      name: `${authUser.name}`
    }
    CreateUser(dispatch, `${authUser.id}`, infoUser)
  } else {
    console.log('no se creara un nuevo usuario con este id')
  }
} 