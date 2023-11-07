import React from 'react';
import {Button, Grid, TextField, Typography} from '@mui/material';
import {FormProvider, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import singUpSchema from '@/schema/schemaSignUp';
import MyTextField from '@/components/forms/TextField';
import ToggleField from '@/components/forms/ToggleField';
import Link from 'next/link';
import schemaLogIn from '@/schema/schemaLogIn';

const Login = () => {
  const methods = useForm({resolver: yupResolver(schemaLogIn)});

  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <MyTextField id='email' label='Email' />
          </Grid>
          <Grid item xs={12}>
            <MyTextField id='password' label='Password' type='password' />
          </Grid>
          <Grid item xs={12}>
            <ToggleField />
          </Grid>
          <Grid item xs={12}>
            <Button
              className='w-full bg-black rounded-[24px] text-[14px] leading-5 normal-case h-12'
              type='submit'
              variant='contained'>
              Log in
            </Button>
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  );
};

export default Login;
