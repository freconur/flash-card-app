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
  colorDeck?:string,
  countCards?:number
}
interface Flashcards {
  id?:string
  pregunta?:string
  respuesta?:string
}
interface DecksUserToUpdate {
  titleToUpdate?:string,
  colorDeckToUpdate?:string,
  countCardsToUpdate?:number
}
interface DecksDataGlobal {
  idUser: string,
  decksUser: DecksUser[],
  userCards: Flashcards[],
  getFlashcardsFromDecks: Flashcards[],
  localStorageValues: string | null,
  conditionalValue:number,
  settingsDeck: boolean,
  deckToUpdate:DecksUser,
  getTitleFromDeck:string,
  currentlyDeck?:DecksUser
}
interface UseSelectColor {
  color:string,
  active:boolean
}