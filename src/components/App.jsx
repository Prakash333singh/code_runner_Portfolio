// import { Route, Routes } from "react-router";
import Home from "./Home";
import Navbar from "./Navbar";
import SocialLinks from "./SocialLinks";
import About from "./About";
import Portfolio from "./Portfolio";
import Experience from "./Experience";
import Contact from "./Contact";
function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  )
}

export default App
