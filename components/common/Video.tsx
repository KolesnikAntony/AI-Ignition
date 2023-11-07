'use client';

import React from 'react';
import ReactPlayer from 'react-player';

const Video = () => {
  return (
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
  );
};

export default Video;
