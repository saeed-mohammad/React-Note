import React from "react";
import Note from "./Note";
import "../style/NoteList.scss";
import Addnote from "./Addnote";

const NoteList = ({ notes, handleAddNote, handleDelete }) => {
  return (
    <div className="notelist">
      {notes.map((note, index) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          key={index}
          handleDelete={handleDelete}
        />
      ))}
      <Addnote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NoteList;
