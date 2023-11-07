'use client';
import React from 'react';
import {Card, styled, Typography} from '@mui/material';
import UploadIcon from '@/components/icons/upload';

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

const Loader = () => {
  return (
    <Card
      component='label'
      className='w-full h-full flex items-center justify-center flex-col cursor-pointer'
      style={{
        background: 'linear-gradient(109deg, #DBB898 25.3%, #9DC1CE 82.65%)',
      }}>
      <UploadIcon />
      <Typography className='text-[32px]'>Upload CV</Typography>
      <Typography className='text-base'>( PDF or DOCX )</Typography>
      <VisuallyHiddenInput type='file' />
    </Card>
  );
};

export default Loader;
