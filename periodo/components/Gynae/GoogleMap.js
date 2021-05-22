import React, { useState } from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const MAP_API_KEY='<MAP_API_KEY>'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const MapContainer =(props)=> {
    const classes = useStyles();
    const [city, setCity] = useState('');

    const getLatLong = async (city, callback) => {
      let data  = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${city},+CA&key=${MAP_API_KEY}`)
      let locationData = await data.json();
      return locationData.results[0].geometry
     }

    const handleSubmit= async (event)=> {
        event.preventDefault();
        let jsonData = await getLatLong(city); 
        
        window.location.href=`https://www.google.com/maps/search/hospitals/@${jsonData.location.lat},${jsonData.location.lng},12z`

    }
    return (
      <div>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField id="outlined-basic" label="City Name" variant="outlined" value={city}
                        onInput={ e=>setCity(e.target.value)} />
        <Button variant="contained" color="primary" type="submit">
          Show nearby hospitals
        </Button>
      </form>
      <Map google={props.google} zoom={14}>

      </Map>
      </div>
    );

}
 
export default GoogleApiWrapper({
  apiKey: (MAP_API_KEY)
})(MapContainer)