import { useLocation } from "react-router-dom";
import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import { Layout } from "../layout";
import { WeeklyWeather } from "../weather";

export const PlaceDetail = () => {
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
          </CardContent>
        </Card>
      </Grid>
    </Layout>
  )
}
