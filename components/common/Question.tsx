import React, {FC} from 'react';
import Link from 'next/link';
import {Typography} from '@mui/material';

type Props = {
  text: string;
  href: string;
  link: string;
  className?: string;
}
const Question:FC<Props> = ({text, link, href, className = ''}) => {
  return (
    <Typography className={className}>
      <span className='opacity-50'>{text}</span>{' '}
      <Link href={href}>{link}</Link>
    </Typography>
  );
};

export default Question;
