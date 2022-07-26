import React from "react";
import '../styles/footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="title_div">
        <a
          href="/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <h1>ToDoNo</h1>
        </a>
      </div>
      <div className="social-media_div">
        <a href="https://www.instagram.com/fabricio_dupraz/">Instagram</a>
        <a href="https://twitter.com/F_Dupraz">Twitter</a>
        <p>duprazfabricio@gmail.com</p>
      </div>
    </footer>
  );
}

export default Footer;