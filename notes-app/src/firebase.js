import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyApGcJh1EOOB0c7EEhk00QPyUW50u3nWFg",
    authDomain: "react-notes-45819.firebaseapp.com",
    projectId: "react-notes-45819",
    storageBucket: "react-notes-45819.appspot.com",
    messagingSenderId: "746916515859",
    appId: "1:746916515859:web:9ec0c1f007a9d184adefe6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
