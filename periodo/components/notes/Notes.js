import React, { useState } from "react";
import ShowNote from "./ShowNotes";
import CreateArea from "./CreateArea";
import styles from "./Notes.module.css";

function Notes() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
    <body>
    <div className={styles.notesContainer}>
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <ShowNote
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
    </body>
    </>
  );
}
export default Notes;
