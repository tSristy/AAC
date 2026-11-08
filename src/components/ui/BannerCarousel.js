'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Box } from '@mui/material';

import 'swiper/css';
import 'swiper/css/pagination';
import React from 'react';
import theme from '@/theme/theme';

export default function BannerCarousel({ children }) {
  return (
    <Box sx={{
      width: '100%', height: '650px', '& .swiper-pagination-bullet': {
        backgroundColor: '#ffffff',
        opacity: 0.6,
        width: '14px !important',
        height: '14px !important'
      },

    '& .swiper-pagination-bullet-active': {
      backgroundColor: theme.palette.primary.main,
      opacity: 1,
    }, }}>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        style={{ height: '100%' }}
      >
        {/* We map the children to wrap each one in a SwiperSlide */}
        {React.Children.map(children, (child) => (
          <SwiperSlide>{child}</SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}