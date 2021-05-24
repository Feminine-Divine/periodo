import React from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";
import {
  faHome,
  faUser,
  faHandHoldingMedical,
  faNotesMedical,
  faFileMedical,
  faCalendarAlt,
  faAward,
  faStar,
  faSignOutAlt,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./navbar.component.style.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

let nav = createMuiTheme();
nav = responsiveFontSizes(nav);

const Navbar = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { user } = useUser();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div >
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{ backgroundColor: "rgb(255, 192, 203)" }}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Link href="/">
            <img src="Logo.png" height="70px" width="215px"></img>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader} style={{ backgroundColor: "rgb(255, 182, 193)" }}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />

<ThemeProvider theme={nav}>
        <div height="30px">
        <List className={classes.root} style={{ backgroundColor: "rgb(255, 182, 193)" }}>
          <ListItem button component="a" href="/homepage">
            <ListItemIcon>
              <FontAwesomeIcon icon={faHome} />
            </ListItemIcon>
             <ListItemText>
                  <Typography variant="h6">Home</Typography>
                </ListItemText>
          </ListItem>

              <ListItem button component="a" href="/about">
                <ListItemIcon>
                  <FontAwesomeIcon icon={faUser} />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="h6">AboutUs</Typography>
                </ListItemText>
              </ListItem>

              <ListItem button component="a" href="/Gynac">
                <ListItemIcon>
                  <FontAwesomeIcon icon={faHandHoldingMedical} />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="h6">GynacHelp</Typography>
                </ListItemText>
              </ListItem>

              <ListItem button component="a" href="/notes">
                <ListItemIcon>
                  <FontAwesomeIcon icon={faNotesMedical} />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="h6">Notes</Typography>
                </ListItemText>
              </ListItem>

              <ListItem button component="a" href="/main">
                <ListItemIcon>
                  <FontAwesomeIcon icon={faFileMedical} />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="h6">Tips</Typography>
                </ListItemText>
              </ListItem>


              <ListItem button component="a" href="/calender">
                <ListItemIcon>
                  <FontAwesomeIcon icon={faCalendarAlt} />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="h6">Calander</Typography>
                </ListItemText>
              </ListItem>

              <ListItem button component="a" href="/analysis">
                <ListItemIcon>
                  <FontAwesomeIcon icon={faAward} />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="h6">Quiz</Typography>
                </ListItemText>
              </ListItem>

              <ListItem button component="a" href="/flow">
                <ListItemIcon>
                  <FontAwesomeIcon icon={faStar} />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="h6">Wanna Rate Yourself</Typography>
                </ListItemText>
              </ListItem>

          {user ? (
            <ListItem button component="a" href="/api/auth/logout">
              <ListItemIcon>
                <FontAwesomeIcon icon={faSignOutAlt} />
              </ListItemIcon>
            <ListItemText>
                    <Typography variant="h6">Logout</Typography>
                  </ListItemText>
            </ListItem>
          ) : (
            <ListItem button component="a" href="/api/auth/login">
              <ListItemIcon>
                <FontAwesomeIcon icon={faSignInAlt} />
              </ListItemIcon>
               <ListItemText>
                    <Typography variant="h6">Login</Typography>
                  </ListItemText>
            </ListItem>
          )}
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br>
        </List>
        </div>
 </ThemeProvider>
      </Drawer>
    </div>
  );
};
export default Navbar;

