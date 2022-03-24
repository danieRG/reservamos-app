
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Grid, List, ListItem, Box } from '@mui/material';
import reservamosApi from '../../api/reservamosAPI';
import { PlaceByName } from '../../interfaces';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '35ch'
      },
    },
  }));

export const Searchbar = () => { 
    const [slug, setSlug] = useState('');
    const [placesList, setPlacesList] = useState<PlaceByName[]>([]);
    let navigate = useNavigate();

    const handlerChange = (e: any ) => {
        setSlug(e.target.value);
    }

    const handlerClick = (slug: string, display: string, lat: string, long: string) => {

        navigate(`/place/${slug}`,{ state: { display, lat, long } })
        setSlug('');
    }

    useEffect(() => {
        
        const getPlaces = async() => {
            const {data} = await reservamosApi.get<PlaceByName[]>(`/places?q=${slug}`);
            setPlacesList(data);
        }

        getPlaces()
    },[slug])

  return (
      <Grid
        sx={{
            display: 'flex',
            
        }}
      >
        <Search>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search for a city..."
                inputProps={{ 'aria-label': 'search' }}
                value={slug}
                onChange={handlerChange}
            />
            <Box sx={{
                position: 'absolute',
                width: '100%'
            }}>
            {
                slug.length > 2 && (
                    <List sx={{
                        maxHeight: 350,
                        overflow: 'scroll',
                        backgroundColor: '#808080'
                    }}>
                        {
                            placesList.length > 0 ? (
                                placesList.map((city, index) => (
                                    <ListItem 
                                        key={index}
                                        sx={{
                                            '&:hover': {
                                                cursor: 'pointer',
                                                backgroundColor: '#6c6874',
                                                transition: 'all 0.4s ease'
                                            }
                                        }}
                                        value={city.city_slug}
                                        onClick={() => handlerClick(city.city_slug, city.display, city.lat, city.long)}
                                    >
                                        {city.display}</ListItem>
                                ))
                            ) : (<ListItem sx={{
                                height:20,
                            }}>No results</ListItem>)
                        }
                    </ List>
                )
            }
            </Box>
        </Search>
      </Grid>

  )
}
