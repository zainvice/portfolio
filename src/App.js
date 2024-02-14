import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './pages/dashboard';
import About from './pages/about';
function App() {
  return (
    <>
     <Router>
            <Routes>
              
              <Route path="/" element={<Dashboard/>} />
              <Route path="/about" element={<About/>} />
            </Routes>
    </Router>   
    </>
  );
}

export default App;
