import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import styles from "./Notes.module.css";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className={styles.createnote} onSubmit={submitNote}>
        <input
          className={styles.forminp}
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          autoComplete="off"
          required
        />
        <textarea
          className={styles.txtarea}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
          required
        />
        <button className={styles.createbtn}>
          <AddIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
