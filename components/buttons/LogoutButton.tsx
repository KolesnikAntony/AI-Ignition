'use client';
import React from 'react';
import {Box, Button} from '@mui/material';
import {signOut, useSession} from 'next-auth/react';

const LogoutButton = () => {
  const {status} = useSession();
  const isAuth = status === 'authenticated';
  if (isAuth) {
    return (
      <Box className='absolute right-4'>
        <Button onClick={() => signOut()}>LogOut</Button>
      </Box>
    );
  }
  return null;
};

export default LogoutButton;
