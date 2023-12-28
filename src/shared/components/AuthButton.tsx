import { Button } from '@mui/material'
import React from 'react'

export default function AuthButton( { title }: { title: string } ) {
  return (
    <Button
        type='submit'
        variant='contained'
        color='darkBg'
        sx={{width: {xs: '100%'}, fontSize: {xs: '.6rem', sm: 'small'}}}
        className='p-3'
    >
        {title}
    </Button>
  )
}
