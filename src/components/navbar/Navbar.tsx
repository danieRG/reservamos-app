import { Link } from "react-router-dom";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import { Searchbar } from "../searchbar/Searchbar";

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
            <Searchbar />
        </Toolbar>
    </AppBar>
  )
}
