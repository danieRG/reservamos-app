import { useLocation } from "react-router-dom";
import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import { Layout } from "../layout";
import { WeeklyWeather } from "../weather";
import { SkeletonCard } from "../skeleton";
import { useEffect, useState } from "react";

export const PlaceDetail = () => {
  const {state} = useLocation();
  const { lat, long, display } : any = state;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() =>{
      setIsLoading(false);
    },300);
    
  },[state])

  return (
    <Layout>
      
      <Grid item xs={12} sm={12}>
        <Card>
          <CardHeader title={display} />
          <CardContent>
          { isLoading && <SkeletonCard /> }
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
