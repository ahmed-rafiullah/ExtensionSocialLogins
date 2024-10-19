import { useState } from "react";
import "./App.css";
import "./firebase.ts";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";

const provider = new GoogleAuthProvider();
const auth = getAuth();

function App() {
  const [user, setUser] = useState<User | null>(null);
  return (
    <>
      <h1>Login below</h1>
      {!user && (
        <button
          onClick={() => {
            signInWithPopup(auth, provider)
              .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential =
                  GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                // The signed-in user info.
                const user = result.user;

                setUser(user);
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                console.log(credential, token, user);
              })
              .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential =
                  GoogleAuthProvider.credentialFromError(error);

                console.log(errorCode, errorMessage, email, credential);
                // ...
              });
          }}
        >
          Google Signin
        </button>
      )}
      {user && (
        <button
          onClick={() => {
            signOut(auth)
              .then(() => {
                // Sign-out successful.
                console.log("signed out");
                setUser(null);
              })
              .catch((error) => {
                // An error happened.
                console.log("errir", error);
                setUser(null);
              });
          }}
        >
          Sign out
        </button>
      )}

      <h2>User Data</h2>
      <pre>{JSON.stringify(user, undefined, 4)}</pre>
    </>
  );
}

export default App;
