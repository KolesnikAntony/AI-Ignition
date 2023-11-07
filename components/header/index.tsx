import React from 'react';
import {Box, Typography} from '@mui/material';
import LogoutButton from '@/components/buttons/LogoutButton';

const Header = () => {
  return (
    <Box className='flex justify-center items-center py-[15px] bg-white relative'>
      <Typography className='text-black text-[34px]' component='h1'>
        AI Ignition
      </Typography>
      <LogoutButton />
    </Box>
  );
};

export default Header;
