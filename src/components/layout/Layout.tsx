import { Grid } from '@mui/material';
import { FC } from 'react';
import { Navbar } from '../navbar';

interface Props {
    children: React.ReactNode
}

export const Layout:FC<Props> = ({children}) => {
  return (
    <Grid container spacing={2}>
        <Navbar />
        {children}
    </Grid>
  )
}
