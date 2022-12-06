import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/customer/products" element={ <Register /> } />
        <Route exact path="/register" element={ <Register /> } />
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/" element={ <Home /> } />
      </Routes>
    </Router>
  );
}

export default App;
