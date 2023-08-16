import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Typography } from './common/typography';
import Button from './common/button';
import Input from './common/input';

function Footer() {
    const footerLinks = ["Overview", "Features", "Pricing", "Careers", "Help", "Privacy"];

    return (
        <footer className='container mx-auto px-3'>
            <section className='py-10 border-y-2 border-gray-200'>
                <div className='flex flex-col md:flex-row md:justify-between gap-4'>
                    <div>
                        <Link href={'/'} className='flex items-center gap-3 my-4 md:my-0'>
                            <Image
                                src={'/homepage-landing/logo.png'}
                                width={34}
                                height={38}
                                alt='hourglass logo'
                                loading='lazy'
                            />
                            <h3 className='text-[22px] text-violet-500 font-semibold'>Hourglass</h3>
                        </Link>
                    </div>

                    <form className="space-y-2">
                        <Typography variant='subtitle2' className='leading-tight'>Stay up to date</Typography>
                        <div className='flex flex-col md:flex-row items-center gap-3'>
                            <Input
                                type="text"
                                placeholder="Enter your email"
                                required
                                className='min-w-[15rem]'
                            />
                            <Button type="button" className='w-full'>
                                Subscribe
                            </Button>
                        </div>
                    </form>
                </div>
                <section className='w-full grid grid-cols-2 md:flex gap-0 md:gap-5 mt-5'>
                    <ul className='flex flex-col md:flex-row gap-2 md:gap-5'>
                        {footerLinks.slice(0, 3).map(link => (
                            <Link href={'/'}>
                                <Typography variant='subtitle1' className='text-gray-500'>{link}</Typography>
                            </Link>
                        ))}
                    </ul>
                    <ul className='flex flex-col md:flex-row gap-2 md:gap-5'>
                        {footerLinks.slice(3, 6).map(link => (
                            <Link href={'/'}>
                                <Typography variant='subtitle1' className='text-gray-500'>{link}</Typography>
                            </Link>
                        ))}
                    </ul>
                </section>
            </section>
            <section className="py-7 text-gray-400 text-base font-normal leading-normal">© 2077 Fake Company. All rights reserved.</section>
        </footer>
    );
}

export default Footer;