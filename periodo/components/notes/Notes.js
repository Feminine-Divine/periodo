import React, { useState } from "react";
import ShowNote from "./ShowNotes";
import CreateArea from "./CreateArea";
import styles from "./Notes.module.css";

function Notes() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  function deleteNote(id) {
    setNotes((prevNotes) =>
      prevNotes.filter((noteItem, index) => index !== id)
    );
  }

  return (
    <div className={styles.notesContainer}>
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => (
        <ShowNote
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      ))}
    </div>
  );
}

export default Notes;
