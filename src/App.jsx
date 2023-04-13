import { useState } from 'react'
import './App.css'
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase/fireBase.config';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const gProvider = new GithubAuthProvider();
function App() {
  const [user , setUser] = useState(null)
  const handleSignIn = () => {
    signInWithPopup(auth, provider)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser)
      setUser(loggedUser)
       
    })
    .catch(error => {
      console.log(error)
    })
  }
const handleGSignIn = () =>{
  signInWithPopup(auth, gProvider)
  .then(result => {
    const loggedUser = result.user;
    console.log(loggedUser)
    setUser(loggedUser)
     
  })
  .catch(error => {
    console.log(error)
  })
}
const handleSignOut = () =>{
  signOut(auth).
  then(() => {
   setUser(null)
  }).catch((error) => {
    // An error happened.
  });
}
  return (
    <div className="App">
     
      <h1>Vite + React</h1>
      <button onClick={handleSignIn}>
          sign in
        </button>
      <button onClick={handleGSignIn}>
          gsign in
        </button>
        <button onClick={handleSignOut}> sign out</button>
        {
          user &&       <div className="card">
          <p>{user.displayName
}</p>
<img src={user.photoURL
} alt="" />
             </div>
        }

     
    </div>
  )
}

export default App
