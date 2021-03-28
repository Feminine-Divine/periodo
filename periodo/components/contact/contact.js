import React from "react";
import Navbar from "../navbar";
import "./contact.module.css";
import Button from "@material-ui/core/Button";
import "reactstrap";
import contact1 from '../../pages/contact'
import Footer from '../Footer/Footer'
import CreateIcon from "@material-ui/icons/Create";
import Container from "@material-ui/core/Container";
import FeedbackIcon from "@material-ui/icons/Feedback";
import MailOutlineTwoToneIcon from "@material-ui/icons/MailOutlineTwoTone";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1),
  },
  paper: {
    background: "blue",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
export default function contact() {
  const classes = useStyles();
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div class="body" style="background-color:pink">
      <Navbar />
      <Container>
        <div
          style={{
            background: "#ff80aa",
            borderRadius: "5px",
            paddingLeft: "50px",
            paddingRight: "50px",
            paddingBottom: "50px",
            paddingTop: "15px",
            marginBottom:"50px"
          }}
        >
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <h2 style={{ fontFamily: "Poppins" }}>
              Send us your Feedback
              <FeedbackIcon style={{ height: "30px", width: "40px" }} />
            </h2>
            <hr />
          </Grid>
          <Grid container>
            <Grid item xs={6} style={{ textAlign: "center" }}>
              <AccountCircle style={{ marginTop: "20px", color: "#960435" }} />{" "}
              &nbsp;
              <TextField
                id="standard-secondary"
                label="First Name"
                color="secondary"
                required
              />
            </Grid>

            <Grid item xs={6}>
              <AccountCircle style={{ marginTop: "20px", color: "#960435" }} />{" "}
              &nbsp;
              <TextField
                id="standard-secondary"
                label="Last Name"
                color="secondary"
                required
              />
            </Grid>

            <Grid item xs={6} style={{ textAlign: "center" }}>
              <MailOutlineTwoToneIcon
                style={{ marginTop: "20px", color: "#960435" }}
              />{" "}
              &nbsp;
              <TextField
                id="standard-secondary"
                label="Email"
                color="secondary"
                required
              />
            </Grid>
            <Grid item xs={6} style={{ textAlign: "center" }}></Grid>
            <Grid item xs={6} style={{ textAlign: "center" }}>
              <CreateIcon style={{ marginTop: "20px", color: "#960435" }} />{" "}
              &nbsp;
              <TextField
                id="standard-textarea"
                label="Your feedback"
                placeholder="Feedback"
                color="secondary"
                multiline
                required
              />
            </Grid>
            <Grid item xs={6} style={{ textAlign: "center" }}></Grid>
            <Grid
              item
              xs={12}
              style={{ textAlign: "center", marginTop: "50px" }}
            >
              <br></br>
              <Button
                variant="contained"
                color="white"
                type="submit"
                className={classes.button}
                style={{
                  background: "green",
                  color: "white",
                  height: "50px",
                  width: "25%",
                }}
              >
                Submit now
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
