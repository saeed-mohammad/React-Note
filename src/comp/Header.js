import React from "react";

const Header = ({ handleDarkMode }) => {
  const handleToggle = () => {
    handleDarkMode((prevDarkMode) => !prevDarkMode);
    // console.log("handleMode", handleDarkMode);
  };
  return (
    <div className="header">
      <h1>Notes</h1>
      <button className="toggle" onClick={handleToggle}>
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
