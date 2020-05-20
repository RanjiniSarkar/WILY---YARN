import * as firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyDI-li9b-vzKo8jDctpVrb3RwlACMs6LTA",
    authDomain: "wily-58a31.firebaseapp.com",
    databaseURL: "https://wily-58a31.firebaseio.com",
    projectId: "wily-58a31",
    storageBucket: "wily-58a31.appspot.com",
    messagingSenderId: "154100687992",
    appId: "1:154100687992:web:aaad6e3f6af07095f4b98d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()
  