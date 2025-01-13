import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Read from './components/Read'
import TopNav from './components/TopNav';
import About from './components/About';
import Autors from './components/Autors';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  return(
    <>
      <Router>

        <TopNav />

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/read" element={<Read />}/>
          <Route path="/autors" element={<Autors />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
        </Routes>
        
      </Router>
    </>
  );
}

export default App;
