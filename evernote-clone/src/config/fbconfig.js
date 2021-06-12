import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA43Furd7QGGFZ_MslCffWMOL9OVhFaETk",
    authDomain: "evernote-clone-a936c.firebaseapp.com",
    projectId: "evernote-clone-a936c",
    storageBucket: "evernote-clone-a936c.appspot.com",
    messagingSenderId: "609823221572",
    appId: "1:609823221572:web:5cdf14ec85b52d38f21911"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
