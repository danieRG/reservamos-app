import { FC, useEffect, useState } from "react";
import moment from "moment";
import { Box, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import { WeatherElement } from "../../interfaces";
import { weatherByPlace } from "../../utils";

interface Props {
    lat: string;
    long: string;
}

export const WeeklyWeather:FC<Props> = ({ lat, long }) => {

    const [daily, setDaily] = useState([]); 
    
    const getWeeklyWeather = async (lat: string, long: string) => {
        
        const {data} = await weatherByPlace(Number(lat), Number(long))
        setDaily(data.daily);
      }
    
      useEffect(() => {
        getWeeklyWeather( lat, long)
      }, [lat, long])

  return (
    <Box
        sx={{
            p: 2,
            display: 'flex',
            gap: 4,
            alignItems: 'center',
            justifyContent: 'center',
            height: 'calc(40vh - 16px)',
        }}
    >
    {
        daily.map((item : WeatherElement) => (
            <Card 
                sx={{ 
                    maxWidth: 150, 
                    backgroundColor: item.temp.max > 25 ? '#d63031' : '#74b9ff'
                    }} 
                key={item.dt}
            >
            <CardHeader 
                title={moment.unix(item.dt).format('dddd')}
                />
             <CardMedia 
                component='img'
                image={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                height="80"
                alt={item.weather[0].icon}  
            /> 
                <CardContent
                    sx={{
                        width: 'calc(90vw - 100px)',
                    }}
                 >
                    <Typography variant="subtitle2">
                        {item.weather[0].description}
                    </Typography>
                    <Typography variant="body2">
                        Min {item.temp.min} °C 
                    </Typography>
                    <Typography variant="body2">
                        Max {item.temp.max} °C
                    </Typography>
                </CardContent>
        </Card>
        ))
    }

</Box>
  )
}
