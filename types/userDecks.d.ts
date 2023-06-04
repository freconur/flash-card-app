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
}
interface Flashcards {
  id?:string
  pregunta?:string
  respuesta?:string
}
