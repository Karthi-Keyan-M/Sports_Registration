import React from "react";
import "./Footer.css"; // Assuming you have a separate CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p>This is about player registered details</p>
      </div>

      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#upload">Upload</a>
        <a href="#details">Details</a>
      </div>

      <div className="footer-bottom">
        <p>John Doe</p>
        <p>+1234567890</p>
        <p>johndoe@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
