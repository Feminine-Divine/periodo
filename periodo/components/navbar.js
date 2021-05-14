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

import classes from './navbar.component.style.js'

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
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
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
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button component="a" href="/homepage">
            <ListItemIcon>
              <FontAwesomeIcon icon={faHome} />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>

          <ListItem button component="a" href="/about">
            <ListItemIcon>
              <FontAwesomeIcon icon={faUser} />
            </ListItemIcon>
            <ListItemText primary="AboutUs" />
          </ListItem>

          <ListItem button component="a" href="/Gynac">
            <ListItemIcon>
              <FontAwesomeIcon icon={faHandHoldingMedical} />
            </ListItemIcon>
            <ListItemText primary="GynacHelp" />
          </ListItem>

          <ListItem button component="a" href="/notes">
            <ListItemIcon>
              <FontAwesomeIcon icon={faNotesMedical} />
            </ListItemIcon>
            <ListItemText primary="Notes" />
          </ListItem>

          <ListItem button component="a" href="/tips">
            <ListItemIcon>
              <FontAwesomeIcon icon={faFileMedical} />
            </ListItemIcon>
            <ListItemText primary="Tips" />
          </ListItem>

          <ListItem button component="a" href="/calender">
            <ListItemIcon>
              <FontAwesomeIcon icon={faCalendarAlt} />
            </ListItemIcon>
            <ListItemText primary="Calendar" />
          </ListItem>

          <ListItem button component="a" href="/analysis">
            <ListItemIcon>
              <FontAwesomeIcon icon={faAward} />
            </ListItemIcon>
            <ListItemText primary="Quiz" />
          </ListItem>

          <ListItem button component="a" href="/flow">
            <ListItemIcon>
              <FontAwesomeIcon icon={faStar} />
            </ListItemIcon>
            <ListItemText primary="Wanna Rate Yourself" />
          </ListItem>

          {user ? (
            <ListItem button component="a" href="/api/auth/logout">
              <ListItemIcon>
                <FontAwesomeIcon icon={faSignOutAlt} />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          ) : (
            <ListItem button component="a" href="/api/auth/login">
              <ListItemIcon>
                <FontAwesomeIcon icon={faSignInAlt} />
              </ListItemIcon>
              <ListItemText primary="Login" />
            </ListItem>
          )}
        </List>
      </Drawer>
    </div>
  );
};

export default Navbar;
