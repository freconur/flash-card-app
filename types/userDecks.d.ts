// interface Decks {
// idUser?: string
// decks?: Deck
// }

// interface Deck {
// title?: string
// flashcard?: FlashCard
// }[]

// interface FlashCard {
//   pregunta?:string
//   respuesta?:string
// }
interface UserData {
  id?:string
  decks?: string
  email?:string
  name?:string
}


interface Decks {
  title?:string,
  flashcards?:Flashcards[]
}
interface Flashcards {
  pregunta?:string
  respuesta?:string
}