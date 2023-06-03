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
  onSnapshot,
  Timestamp,
} from "firebase/firestore";
import { app } from "../firebase/firebase.config";



const db = getFirestore(app)


export const ValidateUser = async (dispatch:(action:any) => void, id:string) => {
  const colRef = doc(db, "decks-user", id)
  const findUser = await getDoc(colRef);
  if (findUser.exists()) {
    return true
  } else {
    return false
  }
}
export const CreateUser = async(dispatch:(action:any) => void,id:string, userData:UserData) => {
  // const colRef = doc(db,"users",id)
  const user:UserData[] = []
  const infoDeck:Decks = {
    flashcards: [],
    title: "My Decks"
  }
  await setDoc(doc(db, "users", id), userData);
  await setDoc(doc(db, "decks-user", id), infoDeck);
}
export const AddNewDeck = async (deck:Decks) => {
  // await setDoc(doc(db, "", id), infoDeck);
  await addDoc(collection(db, "/decks-user/0os5NJzUxma1TXbRhHHXn2woqOl2/flashcards"), deck);
}
// export const UserDecks = async(dispatch:(action:any) => void) => {
//   const colRef = doc(db, "decks-user", "BvviSQ6yyHfwCXy9rpy8")
//   const findUserDecks = await getDoc(colRef);
//   // console.log(colRef)
//   console.log(findUserDecks.data())
//   // const decks = []
//   // product = { ...findProduct.data(), idProduct: `${InputId}` };
//   // if (findProduct.exists()) {
//   //   dispatch({ type: "getProductById", payload: product, payload2: "kawaii" });
//   // }
// }