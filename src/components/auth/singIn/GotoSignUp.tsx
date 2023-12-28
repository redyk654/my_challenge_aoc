import { Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

export default function GotoSignUp(): JSX.Element {
  return (
    <Typography sx={{fontSize: {xs: '.75rem', sm: '.9rem'}}}>
        Déjà inscrit ? <Link className='text-decoration-none fw-bold' href="/signup">Connectez-vous</Link>
    </Typography>
  )
}
