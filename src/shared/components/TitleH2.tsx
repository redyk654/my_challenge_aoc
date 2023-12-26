import { Typography } from '@mui/material'
import React from 'react'

export default function TitleH2({ textContent }: { textContent: string }) {
  return (
    <Typography className='h3 text-uppercase text-center m-2'>{textContent}</Typography>
  )
}
