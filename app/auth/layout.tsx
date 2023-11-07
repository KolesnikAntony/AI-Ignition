import {Grid} from '@mui/material';
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
          <Image
            src='/images/bg.png'
            layout='fix'
            width={384}
            height={953}
            objectFit='contain'
            alt='Picture of the author'
          />
        </Grid>
      </Grid>
    </NotificationProvider>
  );
}
