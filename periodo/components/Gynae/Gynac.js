import {
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  Icon,
  InputLabel,
  makeStyles,
  Menu,
  MenuItem,
  MuiThemeProvider,
  Paper,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import Navbar from "../navbar";
import { Forme, Userform } from "./Userform";
import Link from "next/link";
import style from "./Gynac.module.css";
import Maps from './GoogleMap'
import shadows from "@material-ui/core/styles/shadows";

const initialFValues = {
  fullName: "",
  age: "",
  email: "",
  mobile: "",
  weight: "",
  height: "",
  cycleDuration: "",
  latestCycle: new Date(),
  lateCycle: "",
  latestCycleDuration: "",
  disorders: "",
  issues: "",
};
export default function Gynac() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { values, setValues, handleInputChange } = Userform(initialFValues);

  return (
    <>
      <Navbar></Navbar>

      <Forme>
        <h1 className={style.h1}>
          <em>
            <strong>Contact the Gynecologist!</strong>
          </em>
        </h1>
        <div className={style.mydiv}>
          <Grid container className={style.container}>
            <Grid item xs={6} className={style.grid} style={{ paddingRight: 40 }}>
              <em>
                <TextField
                  className={style.field}
                  style={{
                    backgroundColor: "#fff8e1",
                    border: 10,
                    borderRadius:"30px",
                    borderStyle:"none"
                  }}
                  InputLabelProps={{
                    style: {
                      fontSize: "100%",
                      color: "#880e4f",
                      marginLeft:"30px"
                    },
                  }}
                  
                  label="Name"
                  type="text"
                  required
                  name="fullName"
                  color="secondary"
                  value={values.fullName}
                  onChange={handleInputChange}
                />
              </em>

              <em>
                {" "}
                <TextField
                  className={style.field}
                  style={{
                    backgroundColor: "#fff8e1",
                  }}
                  InputLabelProps={{
                    style: {
                      fontSize: "100%",
                      color: "#880e4f",
                      marginLeft:"30px"
                    },
                  }}
                  label="Age"
                  type="number"
                  name="age"
                  value={values.age}
                  onChange={handleInputChange}
                />
              </em>
              <em>
                {" "}
                <TextField
                  className={style.field}
                  style={{
                    backgroundColor: "#fff8e1",
                  }}
                  InputLabelProps={{
                    style: {
                      fontSize: "100%",
                      color: "#880e4f ",
                      marginLeft:"30px"
                    },
                  }}
                  label="Email"
                  type="email"
                  name="email"
                  required
                  value={values.email}
                  onChange={handleInputChange}
                />
              </em>
              <em>
                <TextField
                  className={style.field}
                  style={{
                    backgroundColor: "#fff8e1",
                  }}
                  InputLabelProps={{
                    style: {
                      fontSize: "100%",
                      color: "#880e4f ",
                      marginLeft:"30px"
                    },
                  }}
                  label="Contact Number"
                  type="tel"
                  name="mobile"
                  value={values.mobile}
                  onChange={handleInputChange}
                />
              </em>
              <em>
                {" "}
                <TextField
                  className={style.field}
                  style={{
                    backgroundColor: "#fff8e1",
                  }}
                  InputLabelProps={{
                    style: {
                      fontSize: "100%",
                      color: "#880e4f",
                      marginLeft:"30px"
                    },
                  }}
                  label="Weight"
                  type="number"
                  name="weight"
                  value={values.weight}
                  onChange={handleInputChange}
                />
              </em>
              <em>
                <TextField
                  className={style.field}
                  style={{
                    backgroundColor: "#fff8e1",
                  }}
                  InputLabelProps={{
                    style: {
                      fontSize: "100%",
                      color: "#880e4f",
                      marginLeft:"30px"
                    },
                  }}
                  label="Height (in cm)"
                  name="height"
                  type="number"
                  value={values.height}
                  onChange={handleInputChange}
                />
              </em>
            </Grid>
            <Grid item xs={6} className={style.grid} style={{ paddingRight: 40 }}>
              <em>
                <TextField
                  className={style.field}
                  style={{
                    backgroundColor: "#fff8e1",
                  }}
                  InputLabelProps={{
                    style: {
                      fontSize: "100%",
                      color: "#880e4f",
                      padding: "0 5px",
                      marginLeft:"30px"
                    },
                  }}
                  label="No. of Days your Cycle is Late"
                  type="number"
                  name="lateCycle"
                  value={values.lateCycle}
                  onChange={handleInputChange}
                />
              </em>
              <em>
                {" "}
                <TextField
                  className={style.field}
                  style={{
                    backgroundColor: "#fff8e1 ",
                  }}
                  InputLabelProps={{
                    style: {
                      fontSize: "100%",
                      color: "#880e4f",
                      marginLeft:"30px"
                    },
                  }}
                  label="Describe the Menstrual Issue"
                  type="text"
                  name="issues"
                  value={values.issues}
                  onChange={handleInputChange}
                />
              </em>
              <form noValidate>
                <em>
                  {" "}
                  <TextField
                    className={style.field}
                    style={{
                      backgroundColor: "#fff8e1",
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: "100%",
                        color: "#880e4f",
                        marginLeft:"30px"
                      },
                    }}
                    id="date"
                    label="Date of Latest Cycle"
                    type="date"
                    defaultValue="2017-05-24"
                  />
                </em>
              </form>
                <div className={style.grid2}>
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
              </div>
              <div
                className={style.grid2}
                style={{ display: "flex", position: "relative" }}
              >
                <h4 margin="30px">
                  <em>Choose:</em>
                </h4>

                <Button
                  style={{ margin: "10px", position: "absolute", right: "0", borderRadius:"30px" }}
                  aria-controls="customized-menu"
                  aria-haspopup="true"
                  variant="contained"
                  color="secondary"
                  onClick={handleClick}
                >
                  <em>General Menstrual Cycle Duration</em>
                </Button>
              </div>

              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>1</MenuItem>
                <MenuItem onClick={handleClose}>2</MenuItem>
                <MenuItem onClick={handleClose}>3</MenuItem>
                <MenuItem onClick={handleClose}>4</MenuItem>
                <MenuItem onClick={handleClose}>5</MenuItem>
                <MenuItem onClick={handleClose}>6</MenuItem>
                <MenuItem onClick={handleClose}>7</MenuItem>
                <MenuItem onClick={handleClose}>8</MenuItem>
                <MenuItem onClick={handleClose}>9</MenuItem>
                <MenuItem onClick={handleClose}>10</MenuItem>
                <MenuItem onClick={handleClose}>11</MenuItem>
                <MenuItem onClick={handleClose}>12</MenuItem>
                <MenuItem onClick={handleClose}>13</MenuItem>
                <MenuItem onClick={handleClose}>14</MenuItem>
                <MenuItem onClick={handleClose}>15+</MenuItem>
              </Menu>

              <div
                className={style.grid2}
                style={{ display: "flex", position: "relative" }}
              >
                <h4 margin="30px">
                  <em>Choose:</em>
                </h4>
                <Button
                  style={{ margin: "10px", position: "absolute", right: "0",borderRadius:"30px" }}
                  aria-controls="customized-menu"
                  aria-haspopup="true"
                  variant="contained"
                  color="primary"
                  onClick={handleClick}
                >
                  <em>Latest Menstrual Cycle Duration </em>
                </Button>
              </div>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>0</MenuItem>
                <MenuItem onClick={handleClose}>1</MenuItem>
                <MenuItem onClick={handleClose}>2</MenuItem>
                <MenuItem onClick={handleClose}>3</MenuItem>
                <MenuItem onClick={handleClose}>4</MenuItem>
                <MenuItem onClick={handleClose}>5</MenuItem>
                <MenuItem onClick={handleClose}>6</MenuItem>
                <MenuItem onClick={handleClose}>7</MenuItem>
                <MenuItem onClick={handleClose}>8</MenuItem>
                <MenuItem onClick={handleClose}>9</MenuItem>
                <MenuItem onClick={handleClose}>10</MenuItem>
                <MenuItem onClick={handleClose}>11</MenuItem>
                <MenuItem onClick={handleClose}>12</MenuItem>
                <MenuItem onClick={handleClose}>13</MenuItem>
                <MenuItem onClick={handleClose}>14</MenuItem>
                <MenuItem onClick={handleClose}>15+</MenuItem>
              </Menu>

              <div
                className={style.grid2}
                style={{ display: "flex", position: "relative" }}
              >
                <Button
                  style={{
                    margin: "10px 0",marginLeft:"30px"
                  }}
                  variant="contained"
                  color="secondary"
                  type="submit"
                >
                  Send
                </Button>
                <Button
                  style={{ marginRight: "30px", position: "absolute", marginTop:"5px", right:"0" }}
                  variant="contained"
                >
                  Cancel
                </Button>
              </div>
              <hr></hr>
            </Grid>
          </Grid>
        </div>
      </Forme>
      <Maps></Maps>
    </>
  );
}
