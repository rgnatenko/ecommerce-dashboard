import { Navigate, Route, HashRouter as Router, Routes } from 'react-router-dom';
import App from './App';
import React from 'react';
import TelegramStatistics from './pages/TelegramStatistics/TelegramStatistics';

const Routing: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Navigate to="statistics" />} />

      <Route element={
        <App />
      }>
        <Route path="statistics" element={<TelegramStatistics />}>
        </Route>
      </Route>
    </Routes>
  </Router>
);

export default Routing;
