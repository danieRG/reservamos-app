import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { weatherByPlace } from "../../utils";
import { Weather } from "../weather";

export const PlaceDetail = () => {
  const [icon, setIcon] = useState('01d');
  const [description, setDescription] = useState('No data to show');
  const [temp, setTemp] = useState(0);
  const {state} = useLocation();

  const { lat, long, display } : any = state;


  const getWeather = async (lat: string, lon: string) => {

    const {data} = await weatherByPlace(lat, lon)
    console.log(data);
    setIcon(data.current.weather[0].icon);
    setTemp(data.current.temp);
    setDescription(data.current.weather[0].description);

  }

  useEffect(() => {
    getWeather( lat, long)
  }, [])

  return (
    <Grid item xs={12} sm={12}>
      <Card>
        <CardHeader title={display} />
        <CardContent>
            <Weather 
              temp={ temp }
              icon = { icon }
              description = { description }
            />
        </CardContent>
      </Card>

    </Grid>
  )
}
