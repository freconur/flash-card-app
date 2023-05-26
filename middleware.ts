import { getAuth } from "firebase/auth";
import { NextRequest, NextResponse } from "next/server";
import app from "./firebase/firebase.config";
import { useReducer } from "react";
import { DecksInitial, DecksReducer } from "./Reducer/Decks.reducer";

const auth = getAuth(app)

export function middleware(request:NextRequest){
  const [state, dispatch] = useReducer(DecksReducer, DecksInitial)
  const { currentUsera } = state
  console.log('request:',request.nextUrl)
  console.log('holis estoy en el backend')
  // auth.onAuthStateChanged(user:) => {
    if(!currentUsera){
      return NextResponse.redirect(new URL('/', request.url));

    }
  }

  // return NextResponse.next()
