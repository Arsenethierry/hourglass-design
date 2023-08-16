import React from 'react';
import HeaderSection from './header-section';
import AboutUs from './about-section';
import Footer from '../components/footer';

function HomePage() {
    return (
        <div>
            <HeaderSection />
            <AboutUs />
            <Footer />
        </div>
    );
}

export default HomePage;