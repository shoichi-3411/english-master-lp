import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Summary from './components/Summary';
import Problem from './components/Problem';
import Solution from './components/Solution';
import CaseStudies from './components/CaseStudies';
import Methodology from './components/Methodology';
import Curriculum from './components/Curriculum';
import Instructor from './components/Instructor';
import Comparison from './components/Comparison';
import FAQ from './components/FAQ';
import Benefits from './components/Benefits';
import Guarantee from './components/Guarantee';
import ApplicationSteps from './components/ApplicationSteps';
import Pricing from './components/Pricing';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Hero />
      <Summary />
      <Problem />
      <Solution />
      <CaseStudies />
      <Methodology />
      <Curriculum />
      <Instructor />
      <Comparison />
      <FAQ />
      <Benefits />
      <Guarantee />
      <ApplicationSteps />
      <Pricing />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
