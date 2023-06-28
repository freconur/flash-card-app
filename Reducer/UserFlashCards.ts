import {
  getFirestore,
  collection,
  doc,
  updateDoc,
  getDoc,
  getDocs,
  setDoc,
  deleteDoc,
  addDoc,
  orderBy,
  query,
  limit,
  onSnapshot,
} from "firebase/firestore";
import { app } from "../firebase/firebase.config";

const db = getFirestore(app)

export const updateFlashCard = async(idUser:string, deckData:DecksUser | undefined, currentlyValuesFlashcard:Flashcards | undefined) => {
  if(idUser && deckData && currentlyValuesFlashcard ) {
    const flashCardToUpdate = doc(db, `/decks-user/${idUser}/flashcards/${deckData.id}/cards`, `${currentlyValuesFlashcard.id}`);
// const deckToUpdate = doc(db, `/decks-user/${idUser}/flashcards/${deckData.id}/testcard/${currentlyValuesFlashcard.id}/`);
// const deckToUpdate = doc(db, 'decks-user','flashcards',`cards`, `${currentlyValuesFlashcard.id}`);
    await updateDoc(flashCardToUpdate, {
      pregunta:currentlyValuesFlashcard.pregunta,
      respuesta:currentlyValuesFlashcard.respuesta
    });
  }
}