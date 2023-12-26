import { Box, FormControl, Grid, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import LogoBox from '@/components/auth/singUp/LogoBox';
import { centerClasses } from '@/shared/global/variables';
import { colorPalette } from '@/shared/global/palette';
import TitleH2 from '@/shared/components/TitleH2';
import SignUpForm from '@/components/auth/singUp/SignUpForm';
import Link from 'next/link';
import SignUpButton from '@/components/auth/singUp/SignUpButton';

export default function SignUpPage() {
  return (
    <Grid className={`p-1 ${centerClasses}`}>
        <Grid container spacing={0} className='w-75' sx={{height: '85vh'}}>
            {/* Left box with logo */}
            <LogoBox />
            {/* Responsive header (only for mobile) */}
            <Grid item xs={12} md={0} className="d-flex justify-content-center d-md-none">
                <Typography className='h1 text-uppercase'>
                    <Link href='/' className='text-decoration-none text-dark'>logo</Link>
                </Typography>
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
                            <Typography sx={{fontSize: {xs: '.75rem', sm: '.9rem'}}}>
                                Déjà inscrit ? <Link className='text-decoration-none fw-bold' href="/signin">Connectez-vous</Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
  )
}