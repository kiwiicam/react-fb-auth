import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const handleLogout = async () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user')
        navigate("/login");
    }

  return (
    <div>
      <h1>Welcome to React Firebase AUTH using email!!!!! and password</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home
