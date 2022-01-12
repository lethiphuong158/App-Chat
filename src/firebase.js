import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDrZ6wmgBD-6Aianzd57yWiv_FK5KW3eYY",
  authDomain: "what-app-clone-90a96.firebaseapp.com",
  projectId: "what-app-clone-90a96",
  storageBucket: "what-app-clone-90a96.appspot.com",
  messagingSenderId: "174580830999",
  appId: "1:174580830999:web:a1135aaff33049e9395d52",
  measurementId: "G-8GX4GMRL9V"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;