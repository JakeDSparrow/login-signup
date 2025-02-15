import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as  Router,Routes, Route} from "react-router-dom";
import Homepage from './Pages/Homepage';
import LoginSignup from './Components/loginsignup/Loginsignup';

function App() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<LoginSignup />} />
                <Route path="/home" element={<Homepage />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
