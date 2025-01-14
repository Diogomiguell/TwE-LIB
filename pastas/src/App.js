import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Read from './components/Read'
import TopNav from './components/TopNav';
import Autors from './components/Autors';
import Login from './components/Login';
import Register from './components/Register';
import Make from './components/Make';

const App = () => {
  return(
      <Router>
        <div className="app-container">
          <TopNav />
          <div className="app-contents">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/read" element={<Read />}/>
            <Route path="/make" element={<Make />}/>
            <Route path="/autors" element={<Autors />}/>
            <Route href="https://instagram.com/twe_lib"   
                   target="_blank" 
                   rel="noopener noreferrer"
            />
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
          </Routes>
          </div>    
        </div>       
      </Router>
  );
}

export default App;
