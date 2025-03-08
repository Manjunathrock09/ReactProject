import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import WhyWorkhub from "./components/WhyWorkhub";

function App() {
  return (
    <div className="container-fluid p-0">
      <Header />
      <Hero />
      <Features />
      <WhyWorkhub/>
      <Footer />
    </div>
  );
}

export default App;