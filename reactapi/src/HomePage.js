import React, { useState, useEffect } from "react";
import "./HomePage.css"; // CSS for styling the card layout
import SportDetail from "./SportDetail"; // Import the SportDetails component
import "./Footer.css"

const HomePage = () => {
  const [sports, setSports] = useState([]);
  const [selectedSport, setSelectedSport] = useState(null); // Track the selected sport

  // Fetch sports data when the component mounts
  useEffect(() => {
    fetch("https://67544b5636bcd1eec850c0ea.mockapi.io/Sports")
      .then((response) => response.json())
      .then((data) => setSports(data))
      .catch((err) => console.error("Error fetching data: ", err));
  }, []);

  const sportsImages = {
    Athletics: "https://i.pinimg.com/736x/c4/dc/d0/c4dcd062a09f6a494144eb6021a282f1.jpg",
    Tennis: "https://t4.ftcdn.net/jpg/02/23/55/07/360_F_223550750_GCQuqtundmwfwpwlONc85jZjIuRTB4oH.jpg",
    Football: "https://static.vecteezy.com/system/resources/previews/027/829/023/non_2x/close-up-of-many-soccer-players-kicking-a-football-on-a-field-competition-scene-created-with-generative-ai-technology-free-photo.jpg",
    Cricket: "https://image.api.playstation.com/vulcan/ap/rnd/202309/2212/d0746e543cf6cde4f6972d64b9b78f38d066587ee4d91e3a.png",
    Basketball: "https://cdn.nba.com/teams/uploads/sites/1610612744/2024/12/20241228-Jonathan-Kuminga-1280-1.png",
    Volleyball: "https://thumbs.dreamstime.com/b/professional-volleyball-players-action-night-court-open-air-78544704.jpg",
  };

  const handleViewMore = (sport) => {
    setSelectedSport(sport); // Set the selected sport to show details
    <SportDetail></SportDetail>
  };

  const handleBackToHome = () => {
    setSelectedSport(null); // Reset the selected sport to go back to the home page
  };

  return (
    <>
    <div className="homepage">
      {selectedSport ? (
        // Show the SportDetails component if a sport is selected
        <SportDetail sport={selectedSport} onBack={handleBackToHome} />
      ) : (
        // Show the list of sports if no sport is selected
        <>
          <h1>Player Details</h1>
          <div className="card-container">
            {sports.map((sport) => (
              <div className="card" key={sport.id}>
                <img
                  src={sportsImages[sport.Category]}
                  alt={sport.Category}
                  className="card-image"
                />
                <div className="card-content">
                  <h3>{sport.name}</h3>
                  <p>Category: {sport.Category}</p>
                  <p>Team: {sport.TeamName}</p>
                  <button
                    className="view-more-btn"
                    onClick={() => handleViewMore(sport)}
                  >                
                    View More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
    <footer className="footer">
  <div className="footer-info">
    <p>&copy; 2025 Sports Registration. All rights reserved.</p>
    <p>By registering, you agree to our <a href="/terms">Terms and Conditions</a> and <a href="/privacy">Privacy Policy</a>.</p>
  </div>


  <div className="contact-info">
    <p>Contact Us: <br /> 
      Name:  Karthikeyan M<br/>
      Phone: +91 9887765346 <br />
      Email: example@sportsregistration.com
    </p>
  </div>

  <div className="social-media">
    <a href="https://Wa.me/+919884451359" target="_blank" rel="noopener noreferrer">Whatsapp</a>
    <a href="https://x.com/Karthik05726107" target="_blank" rel="noopener noreferrer">Twitter</a>
    <a href="https://www.facebook.com/people/Karthi-Keyan/pfbid02iWZbaRhRWQPYcA8VfhBPa8dLJ1vyq8zBKBZsHq47KDZY2sqgveCpPv91JYxN3jS8l/?name=NTFBLitePrivateSharingLockToggleConfirmDialogController" target="_blank" rel="noopener noreferrer">Facebook</a>
  </div>

  <div className="footer-developer">
    <p>Developed by Karthikeyan.M | Phone: +91 9887765346 | Email: example@sportsregistration.com</p>
  </div>
</footer>
    </>
  );
};

export default HomePage;
