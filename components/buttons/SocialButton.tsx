'use client';
import React, {FC, ReactNode} from 'react';

import {Button} from '@mui/material';
import {signIn} from 'next-auth/react';
type Props = {
  text: string;
  icon: ReactNode;
  provider: string;
};

const SocialButton: FC<Props> = ({text, icon, provider = 'google'}) => {
  return (
    <Button
      onClick={() => signIn(provider, {callbackUrl: '/'})}
      className='rounded-[24px] text-[14px] text-[#4C4D4F] leading-5 normal-case h-12'
      variant='outlined'
      startIcon={icon}>
      {text}
    </Button>
  );
};

export default SocialButton;
