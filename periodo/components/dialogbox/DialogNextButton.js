import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import style from "../calender&timer/calender.module.css";
import Link from "next/link";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogNextButton() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button
        className={style.nextbtn}
        variant="contained"
        onClick={handleClickOpen}
      >
        Next
      </button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Rate your experience"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {"Do you want to share your period experience?"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button
            className={style.Disagreebtn}
            onClick={handleClose}
            variant="outlined"
          >
            Disagree
          </button>
          <Link href="/flow">
            <button
              className={style.Agreebtn}
              variant="contained"
              color="secondary"
            >
              Agree
            </button>
          </Link>
        </DialogActions>
      </Dialog>
    </>
  );
}
