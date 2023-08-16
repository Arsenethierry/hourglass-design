import React from 'react';
import HeaderSection from './header-section';
import HeroSection from './hero-section';
import AboutUs from './about-section';

function HomePage() {
    return (
        <div>
            <HeaderSection />
            <HeroSection />
            <AboutUs />
        </div>
    );
}

export default HomePage;