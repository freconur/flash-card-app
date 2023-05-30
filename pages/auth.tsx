/* globals window */
import React, { useEffect, useState } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import { getApp } from 'firebase/app'
import initAuth from '../initAuth'
import { app, authApp } from '../firebase/firebase.config'
import { AuthAction, withAuthUser } from 'next-firebase-auth'
// Note that next-firebase-auth inits Firebase for us,
// so we don't need to.
initAuth()
const firebaseAuthConfig = {
  signInFlow: 'popup',
  // Auth providers
  // https://github.com/firebase/firebaseui-web#configure-oauth-providers
  signInOptions: [
    {
      provider: EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false,
    },
    {
      provider: GoogleAuthProvider.PROVIDER_ID,
      // requireDisplayName: false,
    },
  ],
  signInSuccessUrl: '/',
  credentialHelper: 'none',
  callbacks: {
    // https://github.com/firebase/firebaseui-web#signinsuccesswithauthresultauthresult-redirecturl
    signInSuccessWithAuthResult: () =>
      // Don't automatically redirect. We handle redirects using
      // `next-firebase-auth`.
      false,
  },
}
const Auth = () => {
  const [renderAuth, setRenderAuth] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRenderAuth(true)
    }
  }, [])
  return (
    <div>
      {renderAuth ? (
        <StyledFirebaseAuth
          uiConfig={firebaseAuthConfig}
          firebaseAuth={getAuth(app)}
          // firebaseAuth={firebase.auth()}
        />
      ) : null}
    </div>
  )
}
export default withAuthUser({
  // whenUnauthedAfterInit:AuthAction.REDIRECT_TO_APP
  whenAuthed:AuthAction.REDIRECT_TO_APP
})(Auth)