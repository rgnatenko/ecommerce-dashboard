import React from 'react';
import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/NavBar/NavBar';
import TelegramStatistics from './pages/TelegramStatistics/TelegramStatistics';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />

      <TelegramStatistics />
    </div>
  );
}

export default App;
