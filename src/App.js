import React, { useEffect } from 'react';
import Home from "./ReactMenu/Home";
import About from "./ReactMenu/About";
import Service from "./ReactMenu/Services";
import Contact from "./ReactMenu/Contact";
import Navbar from "./ReactMenu/Navbar";
import Footer from "./ReactMenu/Footer";
import { createBrowserHistory } from 'history';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';

const App = () => {

  const navigate = useNavigate();
  const history = createBrowserHistory();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigate('/');
    }, 1000);

    return () => clearTimeout(redirectTimeout); // Clean up the timeout on unmount
  }, [navigate]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="*" element={() => navigate('/')} />

      </Routes>
      <Footer />

    </>
  )
}

export default App;
