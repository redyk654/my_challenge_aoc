"use client";
import { colorPalette } from '@/shared/global/palette'
import { centerClasses } from '@/shared/global/variables'
import { Grid, Typography } from '@mui/material'
import React from 'react'

export default function LogoBox(): JSX.Element {
  return (
    <>
        <Grid
            item
            xs={0}
            sm={5}
            sx={{bgcolor: `${colorPalette.background}`, color: `${colorPalette.text.light}`, display: {xs: 'none', sm: 'grid'}}}
        >
            <Grid className={`w-100 h-75 ${centerClasses}`}>
                <Typography className='h1 text-uppercase'>logo</Typography>
            </Grid>
        </Grid>
    </>
  )
}
