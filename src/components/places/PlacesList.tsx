import { Card, CardHeader, Grid, Paper, List } from "@mui/material";
import { useEffect, useState } from "react";
import reservamosApi from "../../api/reservamosAPI"
import { Place } from "../../interfaces";
import { CardList } from "./CardList";

export const PlacesList = () => {
    const [places, setPlaces] = useState<Place[]>([]);

    const getPlaces = async() => {
        const {data} = await reservamosApi.get<Place[]>("/places");
        setPlaces(data);
    }

    useEffect(() => {
        getPlaces();
    },[])

  return (
    <Grid item xs={12} sm={12}>
        <Card sx={{
            height: 'calc(100vh - 100px)',
        }}>
        <CardHeader title='Places' />
        <Paper sx={{
            height: 'calc(100vh - 180px)',
            overflow: 'scroll',
            backgroundColor: 'transparent',
            padding: '3px 5px',
        }}>
            <List>
                {
                    places.map(place =>(
                        <CardList place = {place} />
                    ))
                }
                
            </List>
        </Paper>
      </Card>
      </Grid>
  )
}
