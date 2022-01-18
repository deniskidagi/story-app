import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'




const firebaseConfig = {
    apiKey: "AIzaSyBdrSWGGI7B6V5R6zQtpgPcJ7EvRDqmKxk",
    authDomain: "stories-app-fcc8d.firebaseapp.com",
    projectId: "stories-app-fcc8d",
    storageBucket: "stories-app-fcc8d.appspot.com",
    messagingSenderId: "778532444379",
    appId: "1:778532444379:web:228b0df4bf5ee3d75994fe"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  export default db