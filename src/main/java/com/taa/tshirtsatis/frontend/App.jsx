import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/Footer'
import Home from './pages/Home';
import Card from './pages/Card';
import './App.css';
import TheKheshig from './categories/TheKheshig';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories/TheKheshig" element={<TheKheshig />} />
          <Route path="/card" element={<Card />} />
          <Route path="/card" element={<Card />} />
          <Route path="/card" element={<Card />} />
          <Route path="/card" element={<Card />} />
          <Route path="/card" element={<Card />} />
          
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;