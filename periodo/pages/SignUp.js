import React from "react";
import {
  Grid,
  TextField,
  Button,
  InputAdornment,
  Container,
} from "@material-ui/core";
import { AccountCircle, LockRounded } from "@material-ui/core";

const LoginPage = () => {
  return (
    <div>
      <Container maxWidth="sm">
        <Grid container style={{ minHeight: "100vh" }}>
          <Grid
            container
            item
            alignItems="center"
            direction="column"
            justify="space-between"
            style={{ padding: 10 }}
          >
            <div />
            <div>
              <Grid container justify="center">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    maxWidht: 400,
                    minWidth: 400,
                  }}
                >
                  <TextField label="Email" margin="normal" />
                  <TextField label="Password" margin="normal" />
                  <div style={{ height: 20 }} />
                  <Button color="secondary" variant="contained">
                    Login
                  </Button>
                </div>
              </Grid>
            </div>
            <div />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default LoginPage;
