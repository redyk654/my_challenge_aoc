import GotoSignUp from '@/components/auth/singIn/GotoSignUp'
import SignInForm from '@/components/auth/singIn/SignInForm'
import LogoBox from '@/components/auth/singUp/LogoBox'
import ResponsiveLogo from '@/components/auth/singUp/ResponsiveLogo'
import TitleH2 from '@/shared/components/TitleH2'
import { centerClasses } from '@/shared/global/variables'
import { Grid } from '@mui/material'
import React from 'react'

export default function SignInPage() {
  return (
    <Grid className={`p-1 ${centerClasses}`}>
        <Grid container spacing={0} className='w-75' sx={{height: {sx: 'auto', md: '85vh'}}}>
            {/* Left box with logo */}
            <LogoBox />
            <Grid item xs={12} md={0} sx={{display: {sx: 'grid', md: 'none'}}}>
                {/* Responsive header (only for mobile) */}
                <ResponsiveLogo />
            </Grid>
            {/* Right box with form */}
            <Grid item xs={12} md={7} className={`${centerClasses}`}>
                <Grid className={`${centerClasses} pt-4`}>
                    <Grid className={`w-100 text-dark`} >
                        {/* Title form */}
                        <TitleH2 textContent='connectez-vous' />
                        {/* Form */}
                        <SignInForm />
                        <Grid className={`w-100 ${centerClasses} mt-4`}>
                            {/* Go to signup page */}
                            <GotoSignUp />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
  )
}
