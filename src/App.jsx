import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
 
      <>
        <Navbar />
        <Header />
        <Services /> 
        <About />
        <Testimonials />
        <Contact/>
        <Footer />
      </>
    
  );
}

export default App;
