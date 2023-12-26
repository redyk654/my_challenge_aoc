"use client"
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Box, Button, FormControl, Grid, TextField, Typography } from '@mui/material';
import { centerClasses } from '@/shared/global/variables';
import SignUpButton from './SignUpButton';

const schema = yup.object().shape({
    email: yup.string().email().required(),
    pseudo: yup.string().required(),
    mdp: yup.string().min(2, 'trop court').max(10, 'trop long').required(),
}).required();

export default function SignUpForm(): JSX.Element {

    const { handleSubmit, control, reset, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            pseudo: '',
            mdp: '',
        },
        resolver: yupResolver(schema)
    });

    const singUpUser = (data: any) => {
        console.log(data);
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
        onSubmit={handleSubmit(singUpUser)}
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
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        sx={{width: {xs: '110%'}}}
                    />
                </FormControl>
            )}
        />
        <Controller
            name="pseudo"
            control={control}
            render={({ field }) => (
                <FormControl variant='standard' className={`w-100 ${centerClasses}`}>
                    <TextField
                        {...field}
                        type='text'
                        id="pseudo"
                        label="Pseudo"
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
            <SignUpButton />
        </Grid>
    </Box>
  )
}
