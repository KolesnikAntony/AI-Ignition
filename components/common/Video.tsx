'use client';
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import React from 'react';
import {Box} from '@mui/material';

const Video = () => {
  return (
    <Box>
    <ReactPlayer
      controls={false}
      config={{
        youtube: {
          playerVars: {controls: 0, showInfo: 0, modestbranding: 1},
        },
      }}
      width='100%'
      url='https://www.youtube.com/watch?v=U9rAmaxdvNw'
    />
    </Box>
  );
};

export default Video;
