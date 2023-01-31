import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDLmh2_erTiPa_THtpGqdMVrOFJKCGQjaM",
    authDomain: "ecommerce-project-db-83a98.firebaseapp.com",
    projectId: "ecommerce-project-db-83a98",
    storageBucket: "ecommerce-project-db-83a98.appspot.com",
    messagingSenderId: "245687570911",
    appId: "1:245687570911:web:ae9c22b17e76a386eff46a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore();

export const createUserDoucumentFromAuth = async (userAuth) => {
    // Checking if the specific data exist in the db or not.
    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userDocRef)
    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot.exists())
}
