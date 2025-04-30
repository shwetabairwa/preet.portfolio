import React from "react";
import { BrowserRouter as Router, Route, Routes, HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar />
        <Header />
        <Services />
   
        <About />
        <Testimonials />
        <Contact/>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
