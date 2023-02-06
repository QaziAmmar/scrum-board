import React from 'react'

import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

const Login = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setError] = useState(false);
  const [isAuthorize, setAuth] = useState(false);
  const auth = getAuth();

  const handleChangeEmail = (e) => {
    setError(false);
    setEmail(e.target.value);
  }

  const handleChangePassword = (e) => {
    setError(false);
    setPassword(e.target.value);
  }

  const handleLogin = () => {
    console.log(email, password);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        setAuth(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  }

  return (
    <main className="">
      <div className="w-full">
        <h1 className="">Login</h1>

        <span>Email</span>
        <input type="text" name="" id="" onChange={handleChangeEmail} placeholder="john@doe.com" />

        <span>Password</span>
        <input type="text" name="" id="" onChange={handleChangePassword} placeholder="***************" />
        {/* <Button className="mt-4" block tag={Link} to="/app"> */}
        <button className="mt-4" block onClick={handleLogin}> Log in </button>

        {/* redirect to you on Dashboad Page */}
        {isAuthorize && <Redirect to='/app/' />}

        <div>
          {errorMessage && <p>Invalid User Name of passowrd</p>}
        </div>

      </div>
    </main>
  )
}

export default Login