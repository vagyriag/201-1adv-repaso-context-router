import * as firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARLuJ0-Lx1izb4itsRHAYfn3NGzGuQLKs",
  authDomain: "adv-repaso.firebaseapp.com",
  databaseURL: "https://adv-repaso.firebaseio.com",
  projectId: "adv-repaso",
  storageBucket: "adv-repaso.appspot.com",
  messagingSenderId: "201188397717",
  appId: "1:201188397717:web:e6079756ad29fca928419c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export const humansCol = db.collection('humans');
export const userCol = db.collection('users');

export default db;