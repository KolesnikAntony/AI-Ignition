'use client';
import React from 'react';
import {Card, styled, Typography} from '@mui/material';
import UploadIcon from '@/components/icons/upload';
import {PT_Serif} from 'next/font/google';
import cn from 'classnames';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const inter = PT_Serif({weight: '400', subsets: ['latin']});
const Loader = () => {
  return (
    <Card
      component='label'
      className='w-full h-[360px] flex items-center justify-center flex-col cursor-pointer'
      style={{
        background: 'linear-gradient(109deg, #DBB898 25.3%, #9DC1CE 82.65%)',
      }}>
      <UploadIcon />
      <Typography className={cn(inter.className, 'text-[32px]')}>
        Upload CV
      </Typography>
      <Typography className={cn(inter.className, 'text-base')}>( PDF or DOCX )</Typography>
      <VisuallyHiddenInput type='file' />
    </Card>
  );
};

export default Loader;
