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
  const colRef = doc(db, "decks-user", "BvviSQ6yyHfwCXy9rpy8")
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
  await setDoc(doc(db, "users", id), userData);
//   colRef.forEach(doc => {
//     users.push({...doc.data(),id:doc.id})
//   })
//   dispatch({type:"userData", payload:user})
// return users
}

export const UserDecks = async(dispatch:(action:any) => void) => {
  const colRef = doc(db, "decks-user", "BvviSQ6yyHfwCXy9rpy8")
  const findUserDecks = await getDoc(colRef);
  // console.log(colRef)
  console.log(findUserDecks.data())
  // const decks = []
  // product = { ...findProduct.data(), idProduct: `${InputId}` };
  // if (findProduct.exists()) {
  //   dispatch({ type: "getProductById", payload: product, payload2: "kawaii" });
  // }
}