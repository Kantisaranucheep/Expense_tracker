import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Homepage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Signin from './pages/Signin';
import MainPage from './pages/MainPage';
import Transaction from './pages/Transaction';
import Login from './components/forms/Login';
import Signup from './components/forms/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/main" element={<MainPage/>}/>
        <Route path="/Transaction" element={<Transaction/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
      </Routes>
    </Router>
  );
}

export default App;
