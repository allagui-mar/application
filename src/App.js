import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Teacherspac from './components/Teacherspace';
import Studentspac from './components/Studentspace';


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
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Studentspace" element={<Studentspac />} />
            <Route path="/Teacherspace" element={<Teacherspac />} />
          </Routes>
        </Router>
      </div>
    </HelmetProvider>
  );
}

export default App;
