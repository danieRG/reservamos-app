import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { weatherByPlace } from "../../utils";
import { Layout } from "../layout";
import { Weather, WeeklyWeather } from "../weather";

export const PlaceDetail = () => {
  const [icon, setIcon] = useState('01d');
  const [description, setDescription] = useState('No data to show');
  const [temp, setTemp] = useState(0);
  const {state} = useLocation();

  const { lat, long, display } : any = state;

  return (
    <Layout>
      <Grid item xs={12} sm={12}>
        <Card>
          <CardHeader title={display} />
          <CardContent>
            <WeeklyWeather 
              lat={lat}
              long={long}
            />
  {/*             <Weather 
                temp={ temp }
                icon = { icon }
                description = { description }
              /> */}
          </CardContent>
        </Card>

      </Grid>
    </Layout>
  )
}
