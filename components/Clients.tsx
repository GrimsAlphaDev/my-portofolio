"use client";

import { motion } from 'framer-motion'
import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCard';
import { companies, testimonials } from '@/data';

const Clients = () => {
    return (
        <div className='py-20' id='testimonial'>
            <h1 className='heading'>
                Kind words from
                <span className='text-purple'> Satisfied Clients</span>
            </h1>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                }}
                className='flex flex-col items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
                    <InfiniteMovingCards
                        items={testimonials}
                        direction='right'
                        speed='slow'
                    />

                    <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg: mt-10'>
                        {companies.map(({id, img, name, nameImg}) => (
                            <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
                                <img src={img} alt={name} className='md:w-10 w-5' />
                                <img src={nameImg} alt={name} className='md:w-24 w-20' />
                            </div>
                        ))}
                    </div>
            </motion.div>
        </div>
    )
}

export default Clients