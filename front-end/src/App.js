import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <Login /> } />
        <Route exact path="/login" element={ <Login /> } />
        {/* <Route path="/"> </Route>
      <Route path="/"> </Route>
      <Route path="/"> </Route> */}
      </Routes>
    </Router>
  );
}

export default App;