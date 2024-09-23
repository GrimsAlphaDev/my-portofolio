/* eslint-disable @next/next/no-img-element */
"use client"

import { projects } from '@/data'
import React, { useEffect, useState } from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'
import { motion } from 'framer-motion'

const RecentProjects = () => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div className='py-20' id='projects'>
            <h1 className='heading'>
                A small selection of {''}
                <span className='text-purple'>Recent projects</span>
            </h1>
            <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8,}}
            variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 }
            }}
            className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
                {projects.map(({ id, title, des, img, iconLists, link }) => (
                    <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
                        <PinContainer title={title} href={link}>
                            <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh]  mb-10'>
                                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13152d]'>
                                    <img src='/bg.png' alt='bg-img' />
                                </div>
                                <img src={img} alt={title} className='z-10 absolute bottom-0' />
                            </div>
                            <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                                {title}
                            </h1>
                            <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                                {des}
                            </p>

                            <div className='flex items-center justify-between mt-7 mb-3'>
                                <div className='flex items-center'>
                                    {iconLists.map((icon, index) => (
                                        <div
                                            key={icon}
                                            className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center' style={{ transform: `translateX(-${5 * index * 2}px)` }}
                                        >
                                            <img src={icon} alt={icon} className='p-2' />
                                        </div>
                                    ))}
                                    <div className='flex justify-center items-center'>
                                        <p className='flex lg:text-xl md:text-xs text-sm text-purple '>Check Live Site</p>
                                        <FaLocationArrow className='ms-3' color='#CBACF9' />
                                    </div>
                                </div>
                            </div>

                        </PinContainer>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default RecentProjects