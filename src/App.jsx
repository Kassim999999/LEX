import "./css/App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Pricing from "./components/Pricing";
import Gallery from "./components/Gallery";
// import Testimonials from "./components/Testimonials";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Pricing />
      <Gallery />
      {/*
      
      
      
      <Testimonials />
      <Contact />
      <Footer /> */}
    </>
  );
}

export default App;