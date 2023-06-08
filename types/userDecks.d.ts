interface UserInfo{
  name?:string,
  photo?:string,
  email?:string
}
interface UserData {
  id?:string
  decks?: string
  email?:string
  name?:string
}
interface DecksUser {
  id?:string,
  title?:string,
  flashcards?:Flashcards[]
  focusDeck?:booelan
  focus?:boolean
}
interface Flashcards {
  id?:string
  pregunta?:string
  respuesta?:string
}

interface DecksDataGlobal {
  idUser: string,
  decksUser: DecksUser[],
  userCards: Flashcards[],
  getFlashcardsFromDecks: Flashcards[],
  localStorageValues: string | null,
  conditionalValue:number 
}