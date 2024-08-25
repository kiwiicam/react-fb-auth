import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const HandleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log(userCredential)
            const user = userCredential.user;
            localStorage.setItem('token', user.accessToken)
            localStorage.setItem('user', JSON.stringify(user))
            navigate("/")
        } catch (error) {

        }
    }
    const handleGoogle = async (e) => {
        e.preventDefault();
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const user =result.user;
            localStorage.setItem('token', user.accessToken)
            localStorage.setItem('user', JSON.stringify(user))
            navigate("/")
        } catch (error) {

        }
    }
    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={HandleSubmit} className='signup-form'>
                <input type='email' placeholder='Your Email' required value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type='password' placeholder='Your Password' required value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className='signup-button'> Sign up </button>
            </form>
            <p>Need to Login? <Link to="/login">Login</Link></p>
            <button onClick={handleGoogle}>Signup with google!</button>
        </div>
    )
}

export default Signup
