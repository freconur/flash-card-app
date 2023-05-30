/* globals window */
import React, { useEffect, useState } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { getAuth, EmailAuthProvider } from 'firebase/auth'
import { getApp } from 'firebase/app'
import initAuth from '../initAuth'

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

export default function Auth() {
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
          firebaseAuth={getAuth(getApp())}
          // firebaseAuth={firebase.auth()}
        />
      ) : null}
    </div>
  )
}