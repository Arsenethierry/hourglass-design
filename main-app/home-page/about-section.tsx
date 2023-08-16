import React from 'react';
import { Typography } from '../components/common/typography';
import Image from 'next/image';

function AboutUs() {
    const aboutUsData = [
        {
            title: "Share team inboxes",
            description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
            icon: "/homepage-landing/message-chat-circle.svg"
        },
        {
            title: "Deliver instant answers",
            description: "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
            icon: "/homepage-landing/zap.svg"
        },
    ]
    return (
        <div className='container px-3 py-10 md:py-20 mx-auto space-y-10'>
            <section className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-2'>
                <article className='space-y-2 max-w-xl'>
                    <Typography variant='h6' className='text-[#6941C6]'>Who we are</Typography>
                    <Typography variant='h5' className='text-xl md:text-3xl lg:text-4xl'>Commercial interior designers</Typography>
                    <Typography variant='body1' className='text-gray-500 font-normal leading-normal'>Untitled are a commercial interior design studio. We specialise in customised office design, restaurant design, shop design, and studio design.</Typography>
                </article>
                <article className='space-y-6 max-w-xl'>
                    {aboutUsData.map(data => (
                        <div className='flex items-start gap-2 md:gap-5'>
                            <aside className='bg-purple-100 rounded-3xl p-2'>
                                <Image
                                    src={data.icon}
                                    width={34}
                                    height={34}
                                    alt={'about us'}
                                    loading='lazy'
                                />
                            </aside>
                            <aside>
                                <Typography variant='h6'>{data.title}</Typography>
                                <Typography variant='body1' className='text-gray-500 font-normal leading-normal'>{data.description}</Typography>
                            </aside>
                        </div>
                    ))}
                </article>
            </section>
            <section>
                <Image
                    width={300}
                    height={200}
                    src="/homepage-landing/about-image.png"
                    layout='responsive'
                    objectFit='contained'
                    alt='About us Image'
                />
            </section>
        </div>
    );
}

export default AboutUs;