import React from 'react';
import { Typography } from '../components/common/typography';
import Button from '../components/common/button';
import Image from 'next/image';

const logos = [
    {
        name: "layer",
        src: "/homepage-landing/company-logo-layer.png",
        width: 146,
        height: 48
    },
    {
        name: "sisyphus",
        src: "/homepage-landing/company-logo-sisyphus.png",
        width: 169,
        height: 48
    },
    {
        name: "circooles",
        src: "/homepage-landing/company-logo-circooles.png",
        width: 183,
        height: 48
    },
    {
        name: "catalog",
        src: "/homepage-landing/company-logo-catalog.png",
        width: 160,
        height: 48
    },
    {
        name: "quotient",
        src: "/homepage-landing/company-logo-quotient.png",
        width: 187,
        height: 48
    },
    {
        name: "",
        src: "/homepage-landing/company logo.png",
        width: 147,
        height: 36
    }
]

function HeaderSection() {
    return (
        <section className='bg-[#53389E] min-h-screen md:min-h-fit' style={{ height: "calc(100vh - 63px)" }}>
            <div className='main-container flex flex-col justify-around h-full px-3 my-10'>
                <div className='space-y-7'>
                    <Typography variant='h1' className='text-white text-[36px] md:text-6xl leading-[44px] md:leading-[72px]'>We design physical <span className='underline underline-offset-8'>experiences</span> that <br />create more happy in the world</Typography>
                    <Typography variant='body1' className='text-[#E9D7FE] text-lg md:text-xl font-normal max-w-2xl'>— We’re a full-service interior design agency who specialise in simple, useful and beautiful solutions for any space.</Typography>
                    <div className='flex flex-col sm:flex-row gap-4'>
                        <Button className='flex justify-center md:justify-start items-center gap-1 py-3 bg-white'>
                            <Image
                                src={'/homepage-landing/play-circle.svg'}
                                width={24}
                                height={24}
                                loading='lazy'
                                alt='play icon'
                            />
                            <span className='text-[#6a42c8]'>Showreel</span>
                        </Button>
                        <Button className='py-3'>Get in touch</Button>
                    </div>
                </div>
                <div>
                    <Typography variant='body1' className='text-[#E9D7FE] text-center mb-1 md:mb-10'>We’ve worked with some great startups</Typography>
                    <ul className='grid grid-cols-2 gap-2 md:flex justify-between'>
                        {logos.map((logo) => (
                            <li>
                                <Image
                                    src={logo.src}
                                    width={logo.width}
                                    height={logo.height}
                                    alt={logo.src}
                                    priority={true}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default HeaderSection;