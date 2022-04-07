import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Missions from './components/Missions';
import Profile from './components/Profile';
import Rockets from './components/Rockets';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
