import React from 'react';
import { createRoot } from "react-dom/client";
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import Home from './pages/Home';
import Housing from './pages/Housing';
import About from './pages/About';
import Error from './pages/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import "./assets/styles/global.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <div className='App'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/housing/:id" element={<Housing />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
    <Footer />
  </BrowserRouter>
);