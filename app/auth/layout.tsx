import {Box, Grid} from '@mui/material';
import {ReactNode} from 'react';
import Image from 'next/image';
import NotificationProvider from '@/provider/notification-provider';

export default function AuthLayout({children}: {children: ReactNode}) {
  return (
    <NotificationProvider>
      <Grid container className='mx-auto max-w-[960px] bg-white rounded-[14px]'>
        <Grid item xs className='p-10'>
          {children}
        </Grid>
        <Grid item xs='auto'>
          <Box display={{xs: 'none', md: 'block'}}>
            <Image
              style={{
                objectFit: 'contain',
              }}
              src='/images/bg.png'
              priority={true}
              width={384}
              height={953}
              alt='auth'
            />
          </Box>
        </Grid>
      </Grid>
    </NotificationProvider>
  );
}
