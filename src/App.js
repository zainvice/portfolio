import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './pages/dashboard';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Services from './pages/services';
function App() {
  return (
    <>
     <Router>
            <Routes>
              
              <Route path="/" element={<Dashboard/>} />
              <Route path="/services" element={<Services/>} />
              <Route path="/portfolio" element={<Portfolio/>} />
              <Route path="/about" element={<About/>} />
              
            </Routes>
    </Router>   
    </>
  );
}

export default App;
