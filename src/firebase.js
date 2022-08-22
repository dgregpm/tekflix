import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCGB7ngb2OpDQJyi-7fzqkf-5IzrQcfhJs",
    authDomain: "tekflix-1.firebaseapp.com",
    projectId: "tekflix-1",
    storageBucket: "tekflix-1.appspot.com",
    messagingSenderId: "994712342375",
    appId: "1:994712342375:web:2f43719c50bbbadfcc69c2",
    measurementId: "G-FVQ3K40TXR"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  // const db = firebaseApp.firestore();
  const auth = getAuth(firebaseApp);

  export { auth };
  // export default db;