"use client"
import { ThemeProvider } from '@emotion/react'
import React from 'react'
import { theme } from '../global/palette'

export default function CustomThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
  )
}
