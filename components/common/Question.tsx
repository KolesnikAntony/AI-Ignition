import React, {FC} from 'react';
import Link from 'next/link';
import {Typography} from '@mui/material';
import {PT_Serif} from 'next/font/google';
import cn from 'classnames';

const inter = PT_Serif({weight: '400', subsets: ['latin']});

type Props = {
  text: string;
  href: string;
  link: string;
  className?: string;
};
const Question: FC<Props> = ({text, link, href, className = ''}) => {
  return (
    <Typography className={cn(className, inter.className)}>
      <span className='opacity-50'>{text}</span> <Link href={href}>{link}</Link>
    </Typography>
  );
};

export default Question;
