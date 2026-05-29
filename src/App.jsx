import "./css/App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import Services from "./components/Services";
// import WhyChooseUs from "./components/WhyChooseUs";
// import Pricing from "./components/Pricing";
// import Gallery from "./components/Gallery";
// import Testimonials from "./components/Testimonials";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Home />
      {/* <Hero />
      <Services />
      <WhyChooseUs />
      <Pricing />
      <Gallery />
      <Testimonials />
      <Contact /> */}
      <Footer />
      <WhatsappButton />
    </>
  );
}

export default App;