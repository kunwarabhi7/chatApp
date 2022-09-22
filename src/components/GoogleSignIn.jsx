import React from 'react'
import GoogleButton from 'react-google-button';
import { auth } from '../firebase';
import {GoogleAuthProvider , signInWithRedirect} from 'firebase/auth'

const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth,provider)
}


const GoogleSignIn = () => {
    // console.log(user)
    
  return (
    <div >
      <GoogleButton onClick={signInWithGoogle} />

    </div>
  )
}

export default GoogleSignIn;
