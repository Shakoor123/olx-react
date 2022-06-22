import Firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrbDyb8PX2V6pM8jfoP_9u2npXfnayuww",

  authDomain: "olx-10d70.firebaseapp.com",

  projectId: "olx-10d70",

  storageBucket: "olx-10d70.appspot.com",

  messagingSenderId: "725627397233",

  appId: "1:725627397233:web:ecf9c25572066e42e0a7d0",

  measurementId: "G-WF5TJZ5XJL"

  };

 export default Firebase.initializeApp(firebaseConfig);