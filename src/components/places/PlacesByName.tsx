import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Card, CardHeader, Grid, Paper, Box } from "@mui/material";
import { CardList } from "./CardList";
import { Layout } from "../layout";
import { PlaceByName } from "../../interfaces";
import reservamosApi from "../../api/reservamosAPI";


export const PlacesByName = () => {
    const [placesByName, setPlacesByName] = useState<PlaceByName[]>([]);

    let { slug } = useParams();
    const {state} = useLocation();
    const { display } : any = state;

    const getPlacesByName = async() => {
        const {data} = await reservamosApi.get<PlaceByName[]>(`/places?q=${slug}`);
        setPlacesByName(data);
    }

    useEffect(() => {
        getPlacesByName();
    },[])


  return (
    <Layout>
        <Grid item xs={12} sm={12}>
            <Card>
                <CardHeader title={display} />
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
    </Layout>
  )
}
