import React from 'react';
import {Checkbox, FormControlLabel, Typography} from '@mui/material';
import {Controller, useFormContext} from 'react-hook-form';
import {PT_Serif} from 'next/font/google';
import cn from 'classnames';
const inter = PT_Serif({weight: '400', subsets: ['latin']});
const ToggleField = () => {
  const {control} = useFormContext();
  return (
    <>
      <FormControlLabel
        control={
          <Controller
            control={control}
            name='subscribe'
            defaultValue='false'
            render={({field}) => <Checkbox color='primary' {...field} />}
          />
        }
        label={
          <Typography className={cn('text-[12px]', inter.className)}>
            Subscribe to our monthly newsletter
          </Typography>
        }
      />
    </>
  );
};

export default ToggleField;
