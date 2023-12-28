"use client"
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Box, FormControl, Grid, TextField, Typography } from '@mui/material';
import { centerClasses } from '@/shared/global/variables';
import AuthButton from '@/shared/components/AuthButton';

const schema = yup.object().shape({
    email: yup.string().email().required(),
    mdp: yup.string().required(),
}).required();

export default function SignInForm(): JSX.Element {

    const { handleSubmit, control, reset, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            mdp: '',
        },
        resolver: yupResolver(schema)
    });

    const singInUser = (data: any) => {
        console.log(errors.email?.message);
    }

  return (
    <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
        }}
        // noValidate
        autoComplete="off"
        className={`mt-5 d-flex flex-column`}
        onSubmit={handleSubmit(singInUser)}
    >
        <Controller
            name="email"
            control={control}
            render={({ field }) => (
                <FormControl variant='standard' className={`w-100 ${centerClasses}`}>
                    <TextField
                        {...field}
                        type='email'
                        id="email"
                        label="Email"
                        error={errors.email?.message === undefined ? false : true}
                        sx={{width: {xs: '110%'}}}
                    />
                </FormControl>
            )}
        />
        <Controller
            name="mdp"
            control={control}
            render={({ field }) => (
                <FormControl variant='standard' className={`w-100 ${centerClasses}`}>
                    <TextField
                        {...field}
                        type='password'
                        id="mdp"
                        label="Mot de passe"
                        sx={{width: {xs: '110%'}}}
                    />
                </FormControl>
            )}
        />
        <Grid className={`w-100 ${centerClasses} mt-4`}>
            <AuthButton title='je me connecte' />
        </Grid>
    </Box>
  )
}
