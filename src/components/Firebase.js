import firebase from 'firebase';
var firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBcy6g-oswbVcPLDfbY10AiLXogmIV-ms4",
  authDomain: "hostelreview-8dcd6.firebaseapp.com",
  projectId: "hostelreview-8dcd6",
  storageBucket: "hostelreview-8dcd6.appspot.com",
  messagingSenderId: "570740933312",
  appId: "1:570740933312:web:459fc3069ff6a37c516325",
  measurementId: "G-LX117M4VX0"
});
export const db = firebaseConfig.firestore();
export default firebase
