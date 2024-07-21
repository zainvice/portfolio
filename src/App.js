import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Dashboard from './pages/dashboard';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Services from './pages/services';
import Loader from './pages/loader';
function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1500); // Show loader for 3 seconds
  
      return () => clearTimeout(timer); // Clean up the timer
    
  }, []);

  return (
    <>
     {loading ? <Loader /> : 
     <Router>
            <Routes>
              
              <Route path="/" element={<Dashboard/>} />
              <Route path="/services" element={<Services/>} />
              <Route path="/portfolio" element={<Portfolio/>} />
              <Route path="/about" element={<About/>} />
              
            </Routes>
    </Router>   }
    </>
  );
}

export default App;
