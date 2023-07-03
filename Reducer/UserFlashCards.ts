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

export const currentlyDeckDatas = async(dispatch:(action:any)=>void,idUser:string, idDeck:string) => {
  const docRef = doc(db, `/decks-user/${idUser}/flashcards/`, idDeck);
  const docSnap = await getDoc(docRef);
  const rta = docSnap.data()
  dispatch({type:"currentlyDeckData", payload:rta})
  }

export const updateFlashCard = async(idUser:string, idDeck:string, currentlyValuesFlashcard:Flashcards | undefined) => {
  const flashCardToUpdate = doc(db, `/decks-user/${idUser}/flashcards/${idDeck}/cards`, `${currentlyValuesFlashcard?.id}`);
    await updateDoc(flashCardToUpdate, {
      pregunta:currentlyValuesFlashcard?.pregunta,
      respuesta:currentlyValuesFlashcard?.respuesta
    });
}
export const deleteFlashcardWidthIds = async(idUser:string, idDeck: string,idFlashcard:string) => {
  await deleteDoc(doc(db, `/decks-user/${idUser}/flashcards/${idDeck}/cards`, idFlashcard));
}
export const deleteFlashcard = async(idUser:string, idDeck:string,idFlashcard:string) => {
  await deleteDoc(doc(db, `/decks-user/${idUser}/flashcards/${idDeck}/cards`, idFlashcard));
}

export const addNewFlashcard = async(idUser:string, idDeck:string, valuesFlashcardNewDeck:Flashcards | undefined) => {
  const docRef = await addDoc(collection(db, `/decks-user/${idUser}/flashcards/${idDeck}/cards`), {
    pregunta: valuesFlashcardNewDeck?.pregunta,
    respuesta: valuesFlashcardNewDeck?.respuesta
  });
}

export const flashcardFromDeck = async(idUser:string, idDeck:string) => {
  const rta = await getDocs(collection(db, `/decks-user/${idUser}/flashcards/${idDeck}/cards`));
  let deckUser:DecksUser[] = []
  rta.forEach((doc) => {
    deckUser.push({ ...doc.data(), id: doc.id });
  });
  return deckUser
}

export const flascardsOnSnapshot = (dispatch:(action:any)=>void,idUser: string, idDeck: string) => {
  const colRefCards = collection(db, `/decks-user/${idUser}/flashcards/${idDeck}/cards`);
  onSnapshot(colRefCards, (snapshot) => {
    const userCards: Flashcards[] = [];
    snapshot.docs.forEach((doc) => {
      userCards.push({ ...doc.data(), id: doc.id });
    });
    dispatch({ type: "flashcardsOnSanpshot", payload: userCards });
  });
}

