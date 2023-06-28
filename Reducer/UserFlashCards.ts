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

export const deleteFlashcard = async(idUser:string, currentlyDeck: DecksUser | undefined,flascardData:Flashcards | undefined) => {
  await deleteDoc(doc(db, `/decks-user/${idUser}/flashcards/${currentlyDeck?.id}/cards`, `${flascardData?.id}`));
}

export const addNewFlashcard = async(idUser:string, idDeck:string, valuesFlashcardNewDeck:Flashcards | undefined) => {
  const docRef = await addDoc(collection(db, `/decks-user/${idUser}/flashcards/${idDeck}/cards`), {
    pregunta: valuesFlashcardNewDeck?.pregunta,
    respuesta: valuesFlashcardNewDeck?.respuesta
  });
}