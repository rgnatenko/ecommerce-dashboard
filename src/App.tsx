import React from 'react';
import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />

      <Outlet />
    </div>
  );
}

export default App;
