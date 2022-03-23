import { Button, Card, CardContent, CardHeader, Grid } from "@mui/material";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Layout } from "../layout";
import { WeeklyWeather } from "../weather";

export const PlaceDetail = () => {
  const {state} = useLocation();

  const { lat, long, display } : any = state;
  
  return (
    <Layout>
{/*       <Button variant="contained"
        sx={{
          mt: 3,
          ml: 3,
        }}
        onClick={() => navigate(`/places/${slug}`)}
      >
        Go Back
      </Button> */}
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
