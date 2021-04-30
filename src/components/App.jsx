import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function handleNoteAdd(note) {
    setNotes(prevNotes => {
      return [...prevNotes, note];
    });
  }

  function handleNoteDelete(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((elem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={handleNoteAdd} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={handleNoteDelete}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
