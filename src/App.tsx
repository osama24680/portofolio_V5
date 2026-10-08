import React from "react";
import Header from "./Components/Header/Header.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import About from "./Components/About/About.jsx";
import Experience from "./Components/Experience/Experience.jsx";
import Services from "./Components/Services/Services.jsx";
// import Portfolio from "./Components/Portfolio/Portfolio.jsx"
import Testimonial from "./Components/Testimonial/Testimonial.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Services />
      {/* <Portfolio /> */}
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
