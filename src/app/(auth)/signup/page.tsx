import { Box, FormControl, Grid, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import LogoBox from '@/components/auth/singUp/LogoBox';
import { centerClasses } from '@/shared/global/variables';
import { colorPalette } from '@/shared/global/palette';
import TitleH2 from '@/shared/components/TitleH2';
import SignUpForm from '@/components/auth/singUp/SignUpForm';
import Link from 'next/link';

export default function SignUpPage() {
  return (
    <Grid className={`p-1 ${centerClasses}`}>
        <Grid container spacing={0} className='w-75' sx={{height: '85vh'}}>
            <LogoBox />
            <Grid item xs={7}>
                <Grid className={`${centerClasses} pt-4`}>
                    <Grid className={`w-100`} sx={{color: `#09090ab9`}}>
                        <TitleH2 textContent='inscrivez-vous' />
                        <SignUpForm />
                        <Grid className={`w-100 ${centerClasses} mt-4`}>
                            <Typography>
                                Déjà un compte ? <Link href="/signin">Connectez-vous</Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
  )
}