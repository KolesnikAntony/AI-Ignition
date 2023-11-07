import React from 'react';
import Link from 'next/link';
import {Typography} from '@mui/material';
import {PD} from '@/constants/pages-data';

const Terms = () => {
  const {links, common} = PD;
  const {privacy, terms} = links;
  const {agree, and} = common;
  return (
    <Typography className='text-[12px]'>
      <span className='opacity-50'>{agree} </span>
      <Link href='/'>{terms}</Link>{' '}
      <span className='opacity-50'>{and} </span>
      <Link href='/'>{privacy}</Link>
    </Typography>
  );
};

export default Terms;
