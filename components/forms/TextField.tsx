import React, {FC} from 'react';
import {TextField} from '@mui/material';
import {useFormContext} from 'react-hook-form';

type Props = {
  id: string;
  label: string;
  type?: string;
};

const MyTextField: FC<Props> = ({id, label, type = 'text'}) => {
  const {
    register,
    formState: {errors},
  } = useFormContext();
  return (
    <>
      <TextField
        type={type}
        variant='standard'
        id={id}
        label={label}
        fullWidth
        margin='dense'
        {...register(id)}
        error={!!errors[id]}
        helperText={errors[id]?.message as string}
      />
    </>
  );
};

export default MyTextField;
