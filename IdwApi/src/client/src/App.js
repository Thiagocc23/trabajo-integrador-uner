// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Layout from './components/Layout';
import Administracion from './components/Administracion';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Section />} />
          <Route path="/quienes-somos" element={<AboutUs />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/" element={<Layout />}></Route>
          <Route path='/administracion' element={<Administracion />} />
     
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
