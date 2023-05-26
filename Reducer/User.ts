import {
  getAuth,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

// export const createUserWithGoogle = (user, usersDb) => {
//   const rta = usersDb.find((userDb) => userDb.idGoogle === user.uid);
//   const newUser = {
//     idGoogle: user.uid,
//     email: user.email,
//   };
//   if (rta === undefined) {
//     return async function (dispatch) {
//       try {
//         const response = await axios.post(
//           `${URL}/users`,
//           newUser
//         );
//         return response;
//       } catch (error) {
//         console.log(error);
//       }
//     };
//   } else return "no funciono";
// };

export const googleSignInSuccess = () => {

}
export const googleSignInInitiate = (dispatch:(action:any)=>void) => {
  console.log('esta funcionando')
    // dispatch(googleSignInStart());
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then(({ user }) => {
        console.log('user', user)
      dispatch({ type: "getUser", payload: {displayName:user.displayName, email:user.email} });

        // googleSignInSuccess(user);
      //  createUserWithGoogle(user, usersDb));
      })
      // .catch((error) => dispatch(googleSignInFail(error.message)));
      .catch((error) => console.log(error));
};