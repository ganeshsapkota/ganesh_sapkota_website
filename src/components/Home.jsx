import React from 'react';
import Hero from './Hero';
import Gallery from './Gallery';
import Graduation from './Graduation';
import About from './About';
import Contact from './Contact';

const Home = () => {
    return (
        <div className="home-sections">
            <Hero />
            <Gallery />
            <Graduation />
            <About />
            <Contact />
        </div>
    );
};

export default Home;
