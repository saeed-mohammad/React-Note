import NoteList from "./comp/NoteList";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import "./App.scss";
import Search from "./comp/Search";
import Header from "./comp/Header";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "this is my first note",
      date: "15/11/22",
    },
    {
      id: nanoid(),
      text: "this is my second note",
      date: "15/11/22",
    },
    {
      id: nanoid(),
      text: "this is my third note",
      date: "15/11/22",
    },
    {
      id: nanoid(),
      text: "this is my fourth note",
      date: "15/11/22",
    },
  ]);
  const [searchInp, setSearchInp] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const addNote = (text) => {
    const date = new Date();
    // console.log(text, date);
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && "darkMode"}`}>
      <div className="container">
        <Header handleDarkMode={setDarkMode} />
        <Search searchText={setSearchInp} />
        <NoteList
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchInp))}
          handleAddNote={addNote}
          handleDelete={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;
