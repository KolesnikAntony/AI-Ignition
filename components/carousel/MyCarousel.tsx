'use client';
import React from 'react';
import {Box, Card, ListItem, Stack, Typography} from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import {carouselData} from '@/constants/carousel-data';
import Image from 'next/image';
import {PT_Serif} from 'next/font/google';
import cn from 'classnames';
const inter = PT_Serif({weight: '400', subsets: ['latin']});
const MyCarousel = () => {
  return (
    <Card className='w-full h-[360px] p-[30px]'>
      <Carousel
        className='h-full flex justify-center'
        animation='slide'
        indicators={false}
        fullHeightHover={true}
        navButtonsAlwaysVisible={false}>
        {carouselData.map((el, index) => (
          <ListItem key={index}>
            <Stack
              spacing={2}
              direction='column'
              justifyContent='center'
              alignItems='center'>
              <Box
                component='div'
                className='w-[64px] h-[64px] rounded-full overflow-hidden relative'>
                <Image
                  fill
                  sizes='large'
                  style={{objectFit: 'cover'}}
                  src={el.src}
                  alt='logo'
                />
              </Box>
              <Typography className={cn(inter.className, 'text-2xl')}>
                {el.name}
              </Typography>
              <Typography
                className={cn(inter.className, 'text-lg text-[#A5A6A7]')}>
                {el.description}
              </Typography>
            </Stack>
          </ListItem>
        ))}
      </Carousel>
    </Card>
  );
};

export default MyCarousel;
