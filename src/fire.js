import firebase from 'firebase';




var firebaseConfig = {
    apiKey: "AIzaSyAf6ZuizVo74FtqjoNiBOI9ezLS0HptRPE",
    authDomain: "login-65383.firebaseapp.com",
    projectId: "login-65383",
    storageBucket: "login-65383.appspot.com",
    messagingSenderId: "591900727386",
    appId: "1:591900727386:web:c1e340c49e33b7cf7f6063"
  };

const fire=firebase.initializeApp(firebaseConfig);

export default fire ;