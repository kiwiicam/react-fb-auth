import './App.css';

import { Outlet, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Outlet/>
    </div>
  );
}

export default App;
