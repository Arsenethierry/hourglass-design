import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Button from './common/button';
import Link from 'next/link';
import { Typography } from './common/typography';
import useClickOutside from '../hooks/use-click-outside';
import MenuIcon from './common/menu-icon';
import Drawer from './common/drawer';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const componentRef = useClickOutside(() => {
        setIsOpen(false);
    })


    useEffect(() => {
        function handleScroll() {
            setScrollPosition(window.scrollY);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const isScrolled = scrollPosition > 0;

    return (
        <header className={`w-full h-[63px] fixed top-0 left-0 right-0 bg-[#53389E] z-40 ${isScrolled ? "shadow-lg" : ""}`}>
            <nav className='container px-3 flex items-center justify-between md:justify-start h-full w-full mx-auto gap-10'>
                <Link href={'/'} className='flex items-center gap-3'>
                    <Image
                        src={'/homepage-landing/logo.png'}
                        width={34}
                        height={38}
                        alt="hourglass logo"
                    />
                    <h3 className='text-[22px] text-white font-semibold'>Hourglass</h3>
                </Link>
                <div className='hidden md:flex w-full items-center justify-between'>
                    <ul className='flex gap-5'>
                        <li>
                            <Typography variant='h2' className='text-white text-[22px]'>Home</Typography>
                        </li>
                        <li>
                            <div className='flex gap-2 cursor-pointer'>
                                <Typography variant='h2' className='text-white text-[22px]'>Products</Typography>
                                <svg className='mt-[5px]' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 7.5L10 12.5L15 7.5" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </li>
                        <li>
                            <div className='flex gap-2 cursor-pointer'>
                                <Typography variant='h2' className='text-white text-[22px]'>Resources</Typography>
                                <svg className='mt-[5px]' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 7.5L10 12.5L15 7.5" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </li>
                    </ul>
                    <Button>Talk to sales</Button>
                </div>
                <div ref={componentRef} className='block md:hidden'>
                    <MenuIcon
                        setIsOpen={setIsOpen}
                        isOpen={isOpen}
                    />
                    <Drawer
                        isOpen={isOpen}
                    >
                        <ul>
                            <li className="py-2 px-4 cursor-pointer hover:bg-gray-200">Home</li>
                            <li className="py-2 px-4 cursor-pointer hover:bg-gray-200">Products</li>
                            <li className="py-2 px-4 cursor-pointer hover:bg-gray-200">Resources</li>
                        </ul>
                    </Drawer>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;
