import { Box, FormControl, Grid, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import LogoBox from '@/components/auth/singUp/LogoBox';
import { centerClasses } from '@/shared/global/variables';
import { colorPalette } from '@/shared/global/palette';
import TitleH2 from '@/shared/components/TitleH2';
import SignUpForm from '@/components/auth/singUp/SignUpForm';
import Link from 'next/link';
import SignUpButton from '@/components/auth/singUp/SignUpButton';
import GotoSignIn from '@/components/auth/singUp/GotoSignIn';
import ResponsiveLogo from '@/components/auth/singUp/ResponsiveLogo';

export default function SignUpPage() {
  return (
    <Grid className={`p-1 ${centerClasses}`}>
        <Grid container spacing={0} className='w-75' sx={{height: '85vh'}}>
            {/* Left box with logo */}
            <LogoBox />
            <Grid item xs={12} md={0} sx={{display: {sx: 'grid', md: 'none'}}}>
                {/* Responsive header (only for mobile) */}
                <ResponsiveLogo />
            </Grid>
            {/* Right box with form */}
            <Grid item xs={12} md={7} className={`${centerClasses}`}>
                <Grid className={`${centerClasses} pt-4`}>
                    <Grid className={`w-100`} sx={{color: `#09090ab9`}}>
                        {/* Title form */}
                        <TitleH2 textContent='inscrivez-vous' />
                        {/* Form */}
                        <SignUpForm />
                        <Grid className={`w-100 ${centerClasses} mt-4`}>
                            {/* Go to signin page */}
                            <GotoSignIn />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
  )
}