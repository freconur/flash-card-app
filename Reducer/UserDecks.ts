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

export const DecksUser = async(dispatch:(action:any) => void) => {
  const colRef = await getDocs(collection(db,"users"))
  const users:any = []
  colRef.forEach(doc => {
    users.push({...doc.data(),id:doc.id})
  })
  dispatch({type:"userData", payload:users})
return users
}