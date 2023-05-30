import { getAuth } from "firebase/auth";
import { NextRequest, NextResponse } from "next/server";
import app from "./firebase/firebase.config";
import { useReducer } from "react";
import { DecksInitial, DecksReducer } from "./Reducer/Decks.reducer";

const auth = getAuth(app)

export function middleware(request:NextRequest){
  // console.log('request:',request.nextUrl)
  // console.log('holis estoy en el backend')

  // const infoToken = JSON.stringify(localStorage.getItem('userToken'))
  // const accessToken = localStorage.getItem('userToken') !== undefined ?
  // JSON.parse(infoToken) :
  // localStorage.clear


  // auth.onAuthStateChanged((authUser) => {
  //   console.log('test', accessToken)
  //   if(authUser?.refreshToken === null ){
  //     return NextResponse.redirect(new URL('/', request.url));
  //   }
  // }) 
  }

  // return NextResponse.next()
