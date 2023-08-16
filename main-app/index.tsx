import { NextPage } from 'next';
import { AppProps } from 'next/app';
import React from 'react';
import NavBar from './components/nav-bar';

interface AppLayoutProps {
    Component: NextPage;
    pageProps: any;
}

function AppLayout({ Component, pageProps }: AppLayoutProps) {
    return (
        <main>
            <NavBar />
            <div className='mt-[63px]'>
                <Component {...pageProps} />
            </div>
        </main>
    );
}

export default AppLayout;