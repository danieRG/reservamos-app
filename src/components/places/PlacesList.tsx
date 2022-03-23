import { useEffect, useState } from "react";
import { Card, CardHeader, Grid, Paper, Box } from "@mui/material";
import { Place } from "../../interfaces";
import { CardList } from "./CardList";
import reservamosApi from "../../api/reservamosAPI";

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
        <Card>
            <CardHeader title='Recommended places' />
            <Paper 
                sx={{
                    height: 'calc(100vh - 100px)',
                    overflow: 'scroll',
                    backgroundColor: 'transparent',
                    padding: '3px 5px',
                }}
            >
                <Box
                    sx={{
                        p: 2,
                        bgcolor: 'background.default',
                        display: 'grid',
                        gridTemplateColumns: { md: '1fr 1fr' },
                        gap: 2,
                    }}
                >
                    {
                        places.map(place =>(
                            <CardList 
                                key={place.id}
                                place = {place}
                                type='main' 
                            />
                        ))
                    }
                    
                </Box>
            </Paper>
      </Card>
    </Grid>
  )
}
