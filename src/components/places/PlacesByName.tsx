import { useEffect, useState } from "react";
import { Card, CardHeader, Grid, Paper, Box, Button } from "@mui/material";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { PlaceByName } from "../../interfaces";
import reservamosApi from "../../api/reservamosAPI";
import { CardList } from "./CardList";

export const PlacesByName = () => {
    const [placesByName, setPlacesByName] = useState<PlaceByName[]>([]);

    let { name } = useParams();
    const {state} = useLocation();
    const { display } : any = state;

    let navigate = useNavigate();

    const getPlacesByName = async() => {
        const {data} = await reservamosApi.get<PlaceByName[]>(`/places?q=${name}`);
        setPlacesByName(data);
    }

    useEffect(() => {
        getPlacesByName();
    },[])


  return (
    <Grid item xs={12} sm={12}>
        <Card>
            <CardHeader title={display} />
            <Button variant="outlined" onClick={() => navigate(`/`)}>Home</Button>
            <Paper sx={{
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
                        placesByName.map(place =>(
                            <CardList 
                                key={place.id}
                                place = {place}
                                type='placesByName'
                            />
                        ))
                    }
                    
                </Box>
            </Paper>
        </Card>
    </Grid>
  )
}
