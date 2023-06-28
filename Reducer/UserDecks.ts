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
    title: "My Decks"
  }
  await setDoc(doc(db, "users", id), userData);
  await setDoc(doc(db, "decks-user", id), infoDeck);
}
export const AddNewDeck = async (deck: DecksUser) => {
  await addDoc(collection(db, "/decks-user/0os5NJzUxma1TXbRhHHXn2woqOl2/flashcards"), deck);
  // await addDoc(collection(db, "/cards/0os5NJzUxma1TXbRhHHXn2woqOl2/flashcards"), deck);
}

export const MyDecksUser = (dispatch: (action: any) => void, id: string) => {
  const res = collection(db, `/decks-user/${id}/flashcards`);
  onSnapshot(res, (snapshot) => {
    const decksUser: DecksUser[] = [];
    snapshot.docs.forEach((doc) => {
      decksUser.push({ ...doc.data(), id: doc.id });
    });
    decksUser.map(async (deck) => {
      const querySnapshot = await getDocs(collection(db, `/decks-user/${id}/flashcards/${deck.id}/cards`));
      let count: number = 0
      querySnapshot.forEach((doc) => {
        count = count + 1
      });
      const countCards = doc(db, `/decks-user/${id}/flashcards/`, `${deck.id}`);

      await updateDoc(countCards, {
        countCards: count
      });
    })
    const decksUserFocusProperty = decksUser.map((deck, index) => ({
      ...deck,
      focus: false
    }))
    const decksUserFocusWithFirstIndex = decksUserFocusProperty.map((deck, index) => {
      if (index === 0) {
        deck.focus = true
      }
      return deck
    })
    dispatch({ type: "getDecksUser", payload: decksUserFocusWithFirstIndex });
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
}

// export const GetFlashCardsFromDecks = async (dispatch: (action: any) => void, idUser: string, deckId: string,deckTitle:string, decksUser: DecksUser[]) => {
export const GetFlashCardsFromDecks = async (dispatch: (action: any) => void, deckData: DecksUser | undefined, idUser: string, decksUser: DecksUser[]) => {
  let decksUserFocusProperty
  if (decksUser) {
    decksUserFocusProperty = decksUser?.map((deck) => ({
      ...deck,
      focus: false
    }))
  }
  if (decksUserFocusProperty) {
    const rta = decksUserFocusProperty.map(deck => {
      if (deck.id === deckData?.id) {
        deck.focus = true
      }
      return deck
    })
    dispatch({ type: "getDecksUser", payload: rta });
  }

  const colRefCards = collection(db, `/decks-user/${idUser}/flashcards/${deckData?.id}/cards`)
  const userCards: Flashcards[] = [];
  onSnapshot(colRefCards, (snapshot) => {
    snapshot.docs.forEach((doc) => {
      userCards.push({ ...doc.data(), id: doc.id })
    })
    dispatch({ type: "getFlashcardsFromDecks", payload: userCards, payload2: deckData?.title, payload3: deckData })
  }
  )
}

export const updateDataDeck = async (id: string, dataToUpdate: DecksUser) => {

  const deckToUpdate = doc(db, `/decks-user/${id}/flashcards`, `${dataToUpdate.id}`);

  await updateDoc(deckToUpdate, {
    title: dataToUpdate.title,
    colorDeck: dataToUpdate.colorDeck,
    countCards: dataToUpdate.countCards,
  });
}

export const deleteDeck = async (id: string, idDeck: string) => {

  await deleteDoc(doc(db, `/decks-user/${id}/flashcards`, `${idDeck}`));
}


