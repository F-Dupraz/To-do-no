import React, { Fragment } from "react";
import "../styles/header.scss";

const Header = () => {
  return (
    <Fragment>
      <header className="header">
        <a
          href="/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <h1>ToDoNo</h1>
        </a>
        <button className="header_button" >Sing In</button>
      </header>
    </Fragment>
  );
}

export default Header;
