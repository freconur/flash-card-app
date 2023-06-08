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
  Timestamp,
  writeBatch,
} from "firebase/firestore";
import { app } from "../firebase/firebase.config";



const db = getFirestore(app)
const batch = writeBatch(db);

export const ValidateUser = async (dispatch: (action: any) => void, id: string) => {
  const colRef = doc(db, "decks-user", id)
  const findUser = await getDoc(colRef);
  if (findUser.exists()) {
    return true
  } else {
    return false
  }
}
export const CreateUser = async (dispatch: (action: any) => void, id: string, userData: UserData) => {
  const user: UserData[] = []
  const infoDeck: DecksUser = {
    flashcards: [],
    title: "My Decks"
  }
  await setDoc(doc(db, "users", id), userData);
  await setDoc(doc(db, "decks-user", id), infoDeck);
}
export const AddNewDeck = async (deck: DecksUser) => {
  await addDoc(collection(db, "/decks-user/0os5NJzUxma1TXbRhHHXn2woqOl2/flashcards"), deck);
}

export const MyDecksUser = (dispatch: (action: any) => void, id: string) => {
  const res = collection(db, `/decks-user/${id}/flashcards`);
  onSnapshot(res, (snapshot) => {
    const decksUser: DecksUser[] = [];
    snapshot.docs.forEach((doc) => {
      decksUser.push({ ...doc.data(), id: doc.id });
    });
    dispatch({ type: "getDecksUser", payload: decksUser });
  });
}

export const FlashCardsInit = async (dispatch: (action: any) => void, id: string) => {
  const colRef = collection(db, `/decks-user/${id}/flashcards/`);
  const q = query(colRef, limit(1));
  const querySnapshot = await (getDocs(q));
  let getCard: DecksUser[] = []
  querySnapshot.forEach((doc) => {
    getCard.push({ ...doc.data(), id: doc.id })
  })
  // const q = query(colRef, limit(1));

  //aqui debo crear una funciona que ayude a validar si el usuario tiene algun deck o flash card
  const colRefCards = collection(db, `/decks-user/${id}/flashcards/${getCard[0].id}/cards`);
  onSnapshot(colRefCards, (snapshot) => {
    const userCards: Flashcards[] = [];
    snapshot.docs.forEach((doc) => {
      userCards.push({ ...doc.data(), id: doc.id });
    });
    dispatch({ type: "userCards", payload: userCards });
  });


  // console.log('value',value)
  // const rta1 = localStorage.getItem('FLASHCARDS_USER')
  // if(rta1 !== value) {
  //   dispatch({type: "localStorageValues", payload:rta1})
  // }
}

export const GetFlashCardsFromDecks = async(dispatch: (action: any) => void, idUser: string, deckId: string,focusdeck:boolean) => {
  // const colRefDeck = doc(db,`/decks-user/${idUser}/flashcards/`,deckId);
  // batch.update(colRefDeck, {"focusDeck": false});
  // await batch.commit();
  
  const sfRef = doc(db,`/decks-user/${idUser}/flashcards/`,deckId);
  
  await updateDoc(sfRef, {
    focusDeck: !focusdeck
  });

  const colRefCards = collection(db, `/decks-user/${idUser}/flashcards/${deckId}/cards`)
  const userCards: Flashcards[] = [];
  onSnapshot(colRefCards,(snapshot) => {
    snapshot.docs.forEach((doc) => {
      userCards.push({...doc.data(), id:doc.id})
    })
    dispatch({type: "getFlashcardsFromDecks", payload: userCards})
  }
)}

export const FlashcardsLocalstorage = (dispatch:(action:any)=>void,value:string) => {
  

}
