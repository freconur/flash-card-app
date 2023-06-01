import { app } from 'firebase-admin'
import { getAuth, signOut } from 'firebase/auth'
import {
  AuthAction,
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth'
import { authApp } from '../firebase/firebase.config'

const Dashboard = () => {
  const AuthUser = useAuthUser()
  console.log('auth', AuthUser)
  return (
    <div>
      <img src={`${AuthUser.photoURL}`} alt="photo" />
      <p>Your email is {AuthUser.email ? AuthUser.email : 'unknown'}.</p>
      <button onClick={()=> AuthUser.signOut()}>logout</button>
    </div>
  )
}

// Note that this is a higher-order function.
export const getServerSideProps = withAuthUserTokenSSR(
  {
  whenUnauthed: AuthAction.REDIRECT_TO_LOGIN

})(async() => {
  return {
    props:{}
  }
}
)
//se ejecuta en el servidor

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN
})(Dashboard)//funciona en client