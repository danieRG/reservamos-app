import {FC} from 'react';
import { useNavigate  } from "react-router-dom";
import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material";

interface Props {
    place: {
        display: string;
        city_slug: string;
        lat: string;
        long: string;
        slug: string;
    };
    type: string;
}
export const CardList:FC<Props> = ({ place, type }) => {
    let navigate = useNavigate();

    const viewPlace = (type: string) => {

        type === 'main' 
        ? navigate(`/places/${place.slug}`,{ state: { display: place.display } })
        : navigate(`/place/${place.slug}`,{ state: { display: place.display, lat: place.lat, long: place.long } })
    }

  return (
    <Card onClick={() => viewPlace(type)}>
        <CardActionArea>
            <CardContent>
                <Typography sx={{
                    whiteSpace: 'pre-line',
                }}>
                    {place.display}
                </Typography>
                <CardActions sx={{ display:'flex', justifyContent:'end', paddingRight:2}}>
                    <Typography variant='body2'>
                        Today
                    </Typography>
                </CardActions>
            </CardContent>
        </CardActionArea>
    </Card>
  )
}
