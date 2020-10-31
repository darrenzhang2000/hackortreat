import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAHD6v3HQU3BgLLm47ooteGx2o4MKKUu3I",
  authDomain: "kindcast-5d343.firebaseapp.com",
  databaseURL: "https://kindcast-5d343.firebaseio.com",
  projectId: "kindcast-5d343",
  storageBucket: "kindcast-5d343.appspot.com",
  messagingSenderId: "11358955794",
  appId: "1:11358955794:web:80524665199a3bea67abcb"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
