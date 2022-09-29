import About from "./component/About";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import Contact from "./component/Contact";
import Projects from "./component/Projects";
import "./style.css";
import "./fontawesome-free-5.15.4-web/css/all.css";
import Footer from "./component/Footer";

const Port = () => {
  return (
    <div className="container">
      <Navbar />
      <main>
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Port;
