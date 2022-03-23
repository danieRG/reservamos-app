import { FC, useEffect, useState } from 'react';
import { Box, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import { curretnWeatherByPlace } from "../../utils";

interface Props {
    lat: string;
    long: string;
}

export const Weather:FC<Props> = ({ lat, long }) => {
    const [icon, setIcon] = useState<string>('01d');
    const [temp, setTemp] = useState<number>(0);

    const getCurrentWeather = async (lat: string, long: string) => {
        
        const {data} = await curretnWeatherByPlace(Number(lat), Number(long))
        const { icon, description } = data.weather[0];
        const { temp } = data.main
      
        setIcon(icon);
        setTemp(temp);
      }
    
      useEffect(() => {
        getCurrentWeather( lat, long)
      }, [lat, long])

  return (
    <Box
        sx={{
            p: 2,
            bgcolor: 'background.default',
            display: 'grid',
            gridTemplateColumns: { md: '1fr 1fr' },
        }}
    >
        <Card sx={{ maxWidth: 90,
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: temp > 25 ? '#d63031' : '#74b9ff',
   
        }}>
            <CardHeader title='Today' />
            <CardMedia 
                component='img'
                image={`https://openweathermap.org/img/wn/${icon}.png`}
                height="45"
                alt={icon}  
            />
                <CardContent>
                    <Typography>
                        {temp.toFixed(1)} °C
                    </Typography>
                </CardContent>
        </Card>

</Box>
  )
}
