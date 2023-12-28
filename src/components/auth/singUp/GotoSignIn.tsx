import { Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

export default function GotoSignIn(): JSX.Element {
  return (
    <Typography sx={{fontSize: {xs: '.75rem', sm: '.9rem'}}}>
        Déjà inscrit ? <Link className='text-decoration-none fw-bold' href="/signin">Connectez-vous</Link>
    </Typography>
  )
}
