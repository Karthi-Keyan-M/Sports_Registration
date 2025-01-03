import React, { useState, useEffect } from "react";
import PlayerForm from "./PlayerForm";
import PlayerDetails from "./PlayerDetails";
import HomePage from "./HomePage";
import "./Navbar.css";
import "./Footer.css"

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  // Load the active section from localStorage on component mount
  useEffect(() => {
    const savedSection = localStorage.getItem("activeSection");
    if (savedSection) {
      setActiveSection(savedSection); // Set the saved section
    }
  }, []);

  const handleNavigation = (section) => {
    setActiveSection(section); // Update the active section
    localStorage.setItem("activeSection", section); // Save the section to localStorage
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <h1>Sports</h1>
        </div>
        <div className="navbar-right">
          <a href="#home" onClick={() => handleNavigation("home")}>
            Home
          </a>
          <a href="#upload" onClick={() => handleNavigation("upload")}>
            Upload
          </a>
          <a href="#details" onClick={() => handleNavigation("details")}>
            Details
          </a>
        </div>
      </nav>

      {activeSection === "home" && <HomePage />}
      {activeSection === "upload" && (
        <div className="form-modal">
          <div className="form-modal-content">
            <PlayerForm />
          </div>
        </div>
      )}
      {activeSection === "details" && (
        <div className="details-section">
          <PlayerDetails />
        </div>
      )}
      

    </>
  );
};

export default Navbar;
