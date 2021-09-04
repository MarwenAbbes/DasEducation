import * as Firebase from "firebase";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo94RC9Vwa0znyHqucA0O7k4QSvXJUD90",

  authDomain: "daseducation-cc706.firebaseapp.com",

  projectId: "daseducation-cc706",

  storageBucket: "daseducation-cc706.appspot.com",

  messagingSenderId: "176773999099",

  appId: "1:176773999099:web:dc3c70dc55bc4b679d835e",

  measurementId: "G-0HPCBDMBC2"
};

if (!Firebase.apps.length) {
Firebase.initializeApp(firebaseConfig);
}
Firebase.firestore()
export default Firebase;
