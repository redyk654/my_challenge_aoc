import { Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

export default function ResponsiveLogo() {
  return (
    <Typography className='h1 text-uppercase text-center'>
        <Link href='/' className='text-decoration-none text-dark'>logo</Link>
    </Typography>
  )
}
