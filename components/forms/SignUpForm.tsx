'use client';
import React from 'react';
import {useForm, FormProvider} from 'react-hook-form';
import {Button, Grid, Typography} from '@mui/material';
import MyTextField from '@/components/forms/TextField';
import ToggleField from '@/components/forms/ToggleField';
import {yupResolver} from '@hookform/resolvers/yup';
import singUpSchema from '@/schema/schemaSignUp';
import Link from 'next/link';

type SubmitData = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  subscribe: boolean;
};

const SignUp = () => {
  const methods = useForm({resolver: yupResolver(singUpSchema)});

  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Grid container columnSpacing={4} rowSpacing={4}>
          <Grid item xs={6}>
            <MyTextField id='first_name' label='First Name' />
          </Grid>
          <Grid item xs={6}>
            <MyTextField id='last_name' label='Last Name' />
          </Grid>
          <Grid item xs={12}>
            <MyTextField id='email' label='Email' />
          </Grid>
          <Grid item xs={12}>
            <MyTextField id='password' label='Password' type='password' />
          </Grid>
          <Grid item xs={12}>
            <ToggleField />
          </Grid>
          <Grid item xs>
            <Typography className='text-[12px] text-[#4C4D4F]'>
              <span className='opacity-50'>
                By clicking below you agree to our
              </span>{' '}
              <Link href='/'>Terms of Service</Link>{' '}
              <span className='opacity-50'>and </span>
              <Link href='/'>Privacy Policy</Link>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              className='w-full bg-black rounded-[24px] text-[14px] leading-5 normal-case h-12'
              type='submit'
              variant='contained'>
              Sign up
            </Button>
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  );
};

export default SignUp;
