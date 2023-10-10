import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';


function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>GOMYCODE COURSES</title>
        

      </Helmet>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </Router>
      </div>
    </HelmetProvider>
  );
}

export default App;
