import {FC} from 'react';
import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material";

interface Props {
    place: {
        display: string;
    };
}
export const CardList:FC<Props> = ({ place }) => {
  return (
    <Card >
        <CardActionArea>
            <CardContent>
                <Typography sx={{
                    whiteSpace: 'pre-line',
                }}>
                    {place.display}
                </Typography>
                <CardActions sx={{ display:'flex', justifyContent:'end', paddingRight:2}}>
                    <Typography variant='body2'>
                        Details
                    </Typography>
                </CardActions>
            </CardContent>
        </CardActionArea>
    </Card>
  )
}
