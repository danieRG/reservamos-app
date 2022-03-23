import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import { Link } from "react-router-dom";
export const Navbar = () => {

  return (
    <AppBar position="sticky" elevation={2}>
        <Toolbar>
            <IconButton
                size="large"
                edge="start"
            >
                <FlightTakeoffIcon />
            </IconButton>
            <Typography variant="h6">
                <Link 
                    to={'/'} 
                    style={{  color: 'inherit', textDecoration: 'inherit' }}
                >
                    Home
                </Link>
            </Typography>
        </Toolbar>
    </AppBar>
  )
}
