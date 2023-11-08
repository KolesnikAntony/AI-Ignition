import React from 'react';
import {Box, Typography} from '@mui/material';
import LogoutButton from '@/components/buttons/LogoutButton';
import {PT_Serif} from 'next/font/google';
import cn from 'classnames';

const inter = PT_Serif({weight: '400', subsets: ['latin']});

const Header = () => {
  return (
    <Box className='flex justify-center items-center py-[15px] bg-white relative'>
      <Typography
        className={cn(inter.className, 'text-black text-[34px]')}
        component='h1'>
        AI Ignition
      </Typography>
      <LogoutButton />
    </Box>
  );
};

export default Header;
