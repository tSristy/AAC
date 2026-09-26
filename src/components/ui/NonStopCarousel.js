'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import { Box } from '@mui/material';

const NonStopCarousel = ({ children, itemName }) => {
    if (!children || React.Children.count(children) === 0) return null;

    const itemNumber = itemName === 'product' ? {
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    1440: {
                        slidesPerView: 4,
                        spaceBetween: 30
                    }
                } : itemName === 'client' ? {480: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 5,
                        spaceBetween: 30
                    },
                    1024: {
                        slidesPerView: 8,
                        spaceBetween: 30
                    }} : {};


    return (
       <Box sx={{
            // 1. This targets the wrapper ONLY for this specific carousel
            '& .swiper-wrapper': {
                transitionTimingFunction: 'linear !important',
            },
            // 2. This targets the slides ONLY for this specific carousel
            '& .swiper-slide': {
                display: 'flex !important', // Force flex only here
                alignItems: 'center',
                justifyContent: 'center',
            }
        }}>
            <Swiper
                modules={[Autoplay]}
                slidesPerView={1} 
                spaceBetween={30}
                loop={true}
                allowTouchMove={false}
                speed={5000} 
                autoplay={{
                    delay: 0, 
                    disableOnInteraction: false,
                }}
                freeMode={true} 
                breakpoints={itemNumber}
            >
                {React.Children.map(children, (child, index) => (
                    <SwiperSlide key={index}>
                        {child}
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default NonStopCarousel;