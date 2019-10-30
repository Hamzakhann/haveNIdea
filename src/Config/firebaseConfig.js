import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDOLghW9gF98XBIuaVV0hg4vnF-b0KfyIk",
    authDomain: "haveanideaapp.firebaseapp.com",
    databaseURL: "https://haveanideaapp.firebaseio.com",
    projectId: "haveanideaapp",
    storageBucket: "haveanideaapp.appspot.com",
    messagingSenderId: "915909656690",
    appId: "1:915909656690:web:acd2523389a8a4de5482eb",
    measurementId: "G-77XC4TNQ3K"
  };

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore().settings({ timestampsInSnapshots: true });

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const fbAuthProvider = new firebase.auth.FacebookAuthProvider();