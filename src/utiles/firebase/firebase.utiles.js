import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    ProviderId
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDtqyG0F0Q699bJB9pK5dtSy5QS9SxIZjE",
    authDomain: "crwn-clothing-db-2fd16.firebaseapp.com",
    projectId: "crwn-clothing-db-2fd16",
    storageBucket: "crwn-clothing-db-2fd16.appspot.com",
    messagingSenderId: "112287110738",
    appId: "1:112287110738:web:a8f770eb270808356af18b",
    measurementId: "G-EF0910XNL5"
};


const firebaseApp = initializeApp(firebaseConfig);

const provider =new GoogleAuthProvider();

provider.setCustomParameters({
    prompt:"select_account"
});

export const auth =getAuth();
export const signInWithGooglePopup=()=>signInWithPopup(auth,provider);

