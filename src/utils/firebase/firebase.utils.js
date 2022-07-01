import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDmsFujJyUZuuvCFPyBeYOr-EzYdDutneQ",
  authDomain: "react-market-536f3.firebaseapp.com",
  projectId: "react-market-536f3",
  storageBucket: "react-market-536f3.appspot.com",
  messagingSenderId: "908175426692",
  appId: "1:908175426692:web:c5c43887d23bcb608faed1",
  measurementId: "G-C2TX5Q8ZGS"
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: "select_account"
})


export const auth = getAuth()
console.log(auth)
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
   const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (error) {
      console.log('error', error.message)
    }
  }

  return userDocRef
}
