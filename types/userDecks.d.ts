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
  focus?:boolean
  colorDeck?:string
  secondColorDeck?:string
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
interface UseSelectColor {
  color:string,
  active:boolean
}