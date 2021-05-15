 import Header from './nav/Header.js'
 import React, {useState, useEffect} from "react";
 import "./App.css"
 import Login from "./login"
 import fire from "./fire";
 import ImageSlider from './components/Gallery';
 import { imageData } from './components/image';

const App = () =>  {
  const [user,setUser]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [emailError,setEmailError]=useState('');
  const [passwordError,setPasswordError]=useState('');
  const [hasAccount,setHasAccount]=useState('false');

  const clearInput = ()=>{
    setEmail('');
    setPassword('');

  }

  const clearErrors = () =>{
    setEmailError('');
    setPasswordError('');

  }
  const handleLogin = () =>  {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err)=> {
        switch (err.code){
          case "auth/invalid-email" :
          case "auth/user-diables" :
          case "auth/user-not-fount" :
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };
  const handleSignup =()=>{
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err)=> {
        switch (err.code){
          case "auth/email-alreagy-in-use" :
          case "auth/invalid-email" :
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });

  };


  const authListener= () =>{
    fire.auth().onAuthStateChanged((user)=>{
      if (user) {
        clearInput();
        setUser(user);
      } else{
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  },[]);

  return (
    <div className="App">
      {user ? (
        <Header />
      ) : (
        <Login 
        email={email} 
        setEmail={setEmail} 
        password={password} 
        setPassword={setPassword} 
        handleLogin={handleLogin} 
        handleSignup = {handleSignup}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError} />     
      )}
      <ImageSlider slides={imageData} />;   
    </div>
  );
}

export default App;