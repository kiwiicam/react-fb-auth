import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import Signup from './pages/Signup';
import Login from './pages/Login';
import Protected from './components/Protected';
import Home from './pages/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="signup" element={<Signup/>}/>
      <Route path="login" element={<Login />}/>
      <Route path="/" element={<Protected />}>
        <Route path="/" index element={<Home />}/>
      </Route>

    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);
