// ./initAuth.js
import { init } from 'next-firebase-auth'

const initAuth = () => {
  init({
    authPageURL: '/auth',
    appPageURL: '/',
    loginAPIEndpoint: '/api/login',
    logoutAPIEndpoint: '/api/logout',
    onLoginRequestError: (err) => {
      console.error(err)
    },
    onLogoutRequestError: (err) => {
      console.error(err)
    },
    firebaseAdminInitConfig: {
      credential: {
        projectId: 'flashcardsapi-4701e',
        clientEmail: 'firebase-adminsdk-8ce04@flashcardsapi-4701e.iam.gserviceaccount.com',
        // The private key must not be accessible on the client side.
        privateKey: process.env.FIREBASE_PRIVATE_KEY
      },
      // databaseURL: 'https://my-example-app.firebaseio.com',
    },
    firebaseClientInitConfig: {
      // apiKey: 'AIzaSyCzcuLYLvmhbjHqgGtRv36Gpjtl0uZFFP4', // required
      // authDomain: 'flashcardsapi-4701e.firebaseapp.com',
      // // databaseURL: 'https://my-example-app.firebaseio.com',
      // projectId: 'flashcardsapi-4701e',
      apiKey: "AIzaSyCzcuLYLvmhbjHqgGtRv36Gpjtl0uZFFP4",
      authDomain: "flashcardsapi-4701e.firebaseapp.com",
      projectId: "flashcardsapi-4701e",
      storageBucket: "flashcardsapi-4701e.appspot.com",
      messagingSenderId: "631500038191",
      appId: "1:631500038191:web:bcfe72724649f485d4a6da",
      measurementId: "G-LY44ES2T4H"
    },
    cookies: {
      name: 'flash-card-study', // required
      // Keys are required unless you set `signed` to `false`.
      // The keys cannot be accessible on the client side.
      keys: [
        process.env.COOKIE_SECRET_CURRENT,
        process.env.COOKIE_SECRET_PREVIOUS,
      ],
      httpOnly: true,
      maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
      overwrite: true,
      path: '/',
      sameSite: 'strict',
      secure: true, // set this to false in local (non-HTTPS) development
      signed: true,
    },
    onVerifyTokenError: (err) => {
      console.error(err)
    },
    onTokenRefreshError: (err) => {
      console.error(err)
    },
  })
}

export default initAuth