import React, { useState } from "react";
import "../style/Note.scss";

const Addnote = ({ handleAddNote }) => {
  const [addText, setAddText] = useState("");
  const charcterLimit = 200;
  const handleChange = (e) => {
    if (charcterLimit - e.target.value.length >= 0) {
      setAddText(e.target.value);
    }
  };
  const functionSave = () => {
    if (addText.trim().length > 0) {
      handleAddNote(addText);
      setAddText("");
    }
  };
  return (
    <div className="note new">
      <textarea
        cols="10"
        rows="8"
        placeholder="Add note..."
        onChange={handleChange}
        value={addText}
      ></textarea>
      <div className="note-footer">
        <small>{charcterLimit - addText.length} Remaining</small>
        <button className="save" onClick={functionSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Addnote;
