import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Offerings from "./components/offerings/Offerings";
import About from "./components/about/About";
import Gallery from "./components/gallery/Gallery";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const app = () => {
  return (
    <div>
      <Nav />
      <Header />
      <div className="container">
        <Offerings />
        <About />
        <Gallery />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default app;
