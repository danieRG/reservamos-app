import { FC } from 'react';
import { Box, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import { Main } from '../../interfaces';

interface Props {
    icon: string;
    temp: number;
    description: string;
}

export const Weather:FC<Props> = ({ icon, temp, description }) => {

    
  return (
    <Box
    sx={{
        p: 2,
        bgcolor: 'background.default',
        display: 'grid',
        gridTemplateColumns: { md: '1fr 1fr' },
        gap: 2,
    }}
>
        <Card sx={{ maxWidth: 120 }}>
            <CardHeader title='Today' />
            <CardMedia 
                component='img'
                image={`https://openweathermap.org/img/wn/${icon}.png`}
                height="80"
                alt={icon}  
            />
                <CardContent>
                    <Typography>
                        {temp.toFixed(1)} °C
                    </Typography>
                    <Typography>
                        {description}
                    </Typography>
                </CardContent>
        </Card>

</Box>
  )
}
