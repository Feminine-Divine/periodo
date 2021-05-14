import React from "react";
import { TextField, Button, Container } from "@material-ui/core";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import InputAdornment from "@material-ui/core/InputAdornment";
import PersonIcon from "@material-ui/icons/Person";
import { TextareaAutosize } from "@material-ui/core";
import { Paper, Grid } from "@material-ui/core";
import { Row, Col } from "reactstrap";

function ContactUs() {
  return (
    <Paper
      style={{ alignItems: "center", margin: "0 19%", background: "#960435" }}
    >
      <Card style={{ backgroundColor: "#960435", color: "white" }}>
        <CardHeader title="Talk with us (beta)" />
      </Card>
      <CardContent>
        <form>
          <Grid container spacing={2} lg={12}>
            <Grid item md={12} sm={12} xs={12} lg={12}>
              <TextField
                margin="dense"
                variant="filled"
                name="Name"
                label="Name"
                color="secondary"
                autoComplete="off"
                style={{ width: "100%", background: "#fad2e3" }}
                type="text"
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid
              style={{ alignItems: "center" }}
              item
              md={12}
              sm={12}
              xs={12}
              lg={12}
            >
              <TextField
                margin="dense"
                label="Email"
                variant="filled"
                color="secondary"
                name="email"
                type="email"
                autoComplete="off"
                required
                style={{ width: "100%", background: "#fad2e3" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid
              style={{ alignItems: "center" }}
              item
              md={12}
              sm={12}
              xs={12}
              lg={12}
            >
              {/*<TextField
                  margin="dense"
                  label="Email"
                  variant="filled"
                  color="secondary"
                  name="email"
                  required
                  style={{width: '95%', background:"#fad2e3"}}
                /> */}
              <TextareaAutosize
                rowsMax={4}
                aria-label="maximum height"
                placeholder="Message"
                style={{
                  width: "100%",
                  background: "#e9b8cc",
                  maxHeight: "90px",
                  minHeight: "90px",
                  overflowY: "scroll",
                  fontSize: "17px",
                  outline: "none",
                  padding: "10px",
                  marginTop: "10px",
                }}
              />
            </Grid>
            <br />
            <br />
            <Container>
              <Row>
                <Col>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    style={{
                      background: "black",
                      margin: "10px 0px 0px -10px",
                    }}
                  >
                    Submit
                  </Button>
                </Col>
              </Row>
            </Container>
          </Grid>
        </form>
      </CardContent>
    </Paper>
  );
}

export default ContactUs;
