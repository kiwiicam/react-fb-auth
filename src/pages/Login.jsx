import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential)
      const user = userCredential.user;
      localStorage.setItem('token', user.accessToken)
      localStorage.setItem('user', JSON.stringify(user))
      navigate("/")
    } catch (error) {
      alert("not a valid account");
    }
  }
  const handleGoogle = async (e) => {
    e.preventDefault();
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      localStorage.setItem('token', user.accessToken)
      localStorage.setItem('user', JSON.stringify(user))
      navigate("/")
    } catch (error) {

    }
  }
  return (
    <div>
      <h1>Login!</h1>
      <form onSubmit={HandleSubmit} className='login-form'>
        <input type='email' placeholder='Your Email' required value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type='password' placeholder='Your Password' required value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className='login-button'> Login </button>
      </form>
      <p>Need to Register? <Link to="/signup">Sign up!</Link></p>
      <button onClick={handleGoogle}>Login with google!</button>
    </div>
  )
}

export default Login
