import React from "react";
import { MdDeleteForever } from "react-icons/md";
import "../style/Note.scss";

const Note = ({ id, text, date, handleDelete }) => {
  const handleDeleteFunction = () => {
    handleDelete(id);
  };
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever className="delete-icon" onClick={handleDeleteFunction} />
      </div>
    </div>
  );
};

export default Note;
