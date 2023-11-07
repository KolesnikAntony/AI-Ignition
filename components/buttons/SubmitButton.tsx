import React, {FC} from 'react';
import {Button} from '@mui/material';
type Props = {
  text: string;
};
const SubmitButton: FC<Props> = ({text}) => {
  return (
    <Button
      className='w-full bg-black rounded-[24px] text-[14px] leading-5 normal-case h-12'
      type='submit'
      variant='contained'>
      {text}
    </Button>
  );
};

export default SubmitButton;
