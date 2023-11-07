import React from 'react';
import {Checkbox, FormControlLabel, Typography} from '@mui/material';
import {Controller, useFormContext} from 'react-hook-form';

const ToggleField = () => {
  const {
    control
  } = useFormContext();
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
        label={<Typography className='text-[12px]'>Subscribe to our monthly newsletter</Typography>}
      />
    </>
  );
};

export default ToggleField;
