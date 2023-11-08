import React from 'react';
import Link from 'next/link';
import {Typography} from '@mui/material';
import {PD} from '@/constants/pages-data';
import {PT_Serif} from 'next/font/google';
import cn from 'classnames';
const inter = PT_Serif({weight: '400', subsets: ['latin']});
const Terms = () => {
  const {links, common} = PD;
  const {privacy, terms} = links;
  const {agree, and} = common;
  return (
    <Typography className={cn('text-[12px]', inter.className)}>
      <span className='opacity-50'>{agree} </span>
      <Link href='/' className='underline'>
        {terms}
      </Link>{' '}
      <span className='opacity-50'>{and} </span>
      <Link href='/' className='underline'>
        {privacy}
      </Link>
    </Typography>
  );
};

export default Terms;
