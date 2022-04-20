import Firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDCKYTT-i64WJyTqWHa6cwR5rGFUC2fb2M",
    authDomain: "k-cart-578bd.firebaseapp.com",
    projectId: "k-cart-578bd",
    storageBucket: "k-cart-578bd.appspot.com",
    messagingSenderId: "398730349324",
    appId: "1:398730349324:web:8ef8220aebfb020fca1729",
    measurementId: "G-VSZE6P461X"
  };

 export default Firebase.initializeApp(firebaseConfig);