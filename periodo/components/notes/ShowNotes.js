import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./Notes.module.css";

function ShowNote(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className={styles.note}>
      <div className={styles.h1}>
        <h1 className={styles.notetitle}>{props.title}</h1>
      </div>
      <p className={styles.notebody}>{props.content}</p>
      <button className={styles.delbtn} onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default ShowNote;
