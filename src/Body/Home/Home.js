import React, { useEffect } from "react";
import Hero from "./components/Hero";
import Specializing from "./components/Specializing";
import Expertise from "./components/Expertise";
import LatestProjects from "./components/LatestProjects";
import Qualification from "./components/Qualification";
import Testimonials from "./components/Testimonials";
import LifeJourney from './components/LifeJourney/LifeJourney'
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import './Home.css'
 
 

const Home = (props) => {

  
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  
  return (
    <div   className="body">
      <Hero />
      <Specializing />
      <Expertise />
      <LatestProjects />
      <Qualification />
      <Testimonials />
      <LifeJourney/> 
      <Footer />
    </div>
  );
};

export default Home;
