import { Button, Checkbox, FormControl, FormControlLabel, Grid, Icon, InputLabel, MenuItem, MuiThemeProvider, Select, TextField } from '@material-ui/core';
import React from 'react'
import Navbar from '../navbar'
import Tips from '../tips/tips';
import { Forme, Userform } from './Userform';
import Link from "next/link"


const initialFValues ={
    fullName:'',
    age:'',
    email:'',
    mobile:'',
    weight:'',
    height:'',
    cycleDuration:'',
    latestCycle:new Date(),
    lateCycle:'',
    latestCycleDuration:'',
    disorders:'',
    issues:'', 
}
    export default function Gynac() {

        const {
            values,
            setValues,
            handleInputChange
        }= Userform  (initialFValues); 

        
     
    
             return (
                 <>
            <Navbar></Navbar>
        <Forme>
    <h1 > Contact the Gynecologist!</h1>
    <hr></hr>
        <Grid container>
            <Grid item xs ={6}>
               
            <TextField
                variant="outlined"
                label="Name"
                name="fullName"
                value={values.fullName}
                onChange={handleInputChange}
                />
                <TextField
                  variant="outlined"
                  label="Age"
                  name="age"
                  value={values.age}
                  onChange={handleInputChange}
                  />
                  <TextField
                  variant="outlined"
                  label="Email"
                  name="email"
                  value={values.email}
                  onChange={handleInputChange}
                  />
                  <TextField
                  variant="outlined"
                  label="Contact Number"
                  name="mobile"
                  value={values.mobile}
                  onChange={handleInputChange}
                  />
                  <TextField
                  variant="outlined"
                  label="Weight"
                  name="weight"
                  value={values.weight}
                  onChange={handleInputChange}
                  />
                  <TextField
                  variant="outlined"
                  label="Height (in cm)"
                  name="height"
                  value={values.height}
                  onChange={handleInputChange}
                  />
                  
                  </Grid>

                <Grid item xs ={6}>  
                <TextField
                  variant="filled"
                  label="Number of Days Menstrual Cycle is Late"
                  name="lateCycle"
                  value={values.lateCycle}
                  onChange={handleInputChange}
                  />


                <form noValidate>
  <TextField
    id="date"
    label="Date of Latest Cycle"
    type="date"
    defaultValue="2017-05-24"
    style={{ width: 220 }}
    InputLabelProps={{
      shrink: true,
    }}
  />
</form>
                <FormControl >
        <InputLabel id="label">General Menstrual Cycle Duration</InputLabel>
        <Select
          labelId="label"
          id="label"
          name="cycleDuration"
          value={values.cycleDuration}
          onChange={handleInputChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={11}>11</MenuItem>
          <MenuItem value={12}>12+</MenuItem>
        </Select>
      </FormControl>

      <FormControl >
        <InputLabel id="label">Latest Cycle Duration</InputLabel>
        <Select
          labelId="label"
          id="label"
          name="latestCycleDuration"
          value={values.latestCycleDuration}
          onChange={handleInputChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={11}>11</MenuItem>
          <MenuItem value={12}>12+</MenuItem>
        </Select>
      </FormControl>
      <Grid item cs={6}>
      <h3>Disorders</h3>

      <FormControlLabel
        control={
          <Checkbox
            checked={values.checkedB}
            onChange={handleInputChange}
            name="PCOD"
            color="primary"
          />
        }
        label="PCOD"
        />      
        <FormControlLabel
        control={
          <Checkbox
            checked={values.checkedB}
            onChange={handleInputChange}
            name="PCOS"
            color="primary"
          />
        }
        label="PCOS"
        />      
         <FormControlLabel
        control={
          <Checkbox
            checked={values.checkedB}
            onChange={handleInputChange}
            name="PMS"
            color="primary"
          />
        }
        label="PMS"
        />   
        <FormControlLabel
        control={
          <Checkbox
            checked={values.checkedB}
            onChange={handleInputChange}
            name="PMDD"
            color="primary"
          />
        }
        label="PMDD"
        />   
        <FormControlLabel
        control={
          <Checkbox
            checked={values.checkedB}
            onChange={handleInputChange}
            name="PCOD"
            color="primary"
          />
        }
        label="Others"
        />      
        <FormControlLabel
        control={
          <Checkbox
            checked={values.checkedB}
            onChange={handleInputChange}
            name="None"
            color="primary"
          />
        }
        label="None"
        />   
        <TextField
                  variant="filled"
                  label="Describe the Menstrual Issue"
                  name="issues"
                  value={values.issues}
                  onChange={handleInputChange}
                  /> 
       
        </Grid>
        <Grid item xs={6}>
        <Button variant="contained" color="secondary" >
  Send
</Button>
      <Button variant="contained" >
        Cancel
       </Button>
       <hr></hr>
       <Grid item xs={6}>
       <Link href="/homepage">
         <em> <strong><a>Return Home</a>
         </strong></em>
        </Link >
       </Grid>
       </Grid>
            </Grid>
            </Grid>
        </Forme>

        </>
    )
}
