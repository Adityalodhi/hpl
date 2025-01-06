import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import SportPage from './components/SportPage';
import Footer from "./components/footer"
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sport/:id" element={<SportPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

