import React from "react";
import "./SportDetails.css"; // CSS file for styling

const SportDetails = ({ sport, onBack }) => {
  const sportsImages = {
    Athletics: "https://i.pinimg.com/736x/c4/dc/d0/c4dcd062a09f6a494144eb6021a282f1.jpg",
    Tennis: "https://t4.ftcdn.net/jpg/02/23/55/07/360_F_223550750_GCQuqtundmwfwpwlONc85jZjIuRTB4oH.jpg",
    Football: "https://static.vecteezy.com/system/resources/previews/027/829/023/non_2x/close-up-of-many-soccer-players-kicking-a-football-on-a-field-competition-scene-created-with-generative-ai-technology-free-photo.jpg",
    Cricket: "https://image.api.playstation.com/vulcan/ap/rnd/202309/2212/d0746e543cf6cde4f6972d64b9b78f38d066587ee4d91e3a.png",
    Basketball: "https://cdn.nba.com/teams/uploads/sites/1610612744/2024/12/20241228-Jonathan-Kuminga-1280-1.png",
    Volleyball: "https://thumbs.dreamstime.com/b/professional-volleyball-players-action-night-court-open-air-78544704.jpg",
  };

  return (
    <div className="sport-details">
      <div className="sport-image">
        <img src={sportsImages[sport.Category]} alt={sport.Category} />
      </div>
      <div className="sport-info">
        <h2>{sport.TeamName}</h2>
        <p><span>Name:</span><span className="value">{sport.name}</span></p>
        <p><span>Age:</span><span className="value">{sport.Age}</span></p>
        <p><span>Gender:</span><span className="value">{sport.Gender}</span></p>
        <p><span>Category:</span><span className="value">{sport.Category}</span></p>
        <p><span>Position:</span><span className="value">{sport.Position}</span></p>
        <p><span>Experience:</span><span className="value">{sport.Experience} Years</span></p>
        <p><span>Training Hours:</span><span className="value">{sport.TrainingHours} Hours</span></p>
        <p><span>Contact:</span><span className="value">{sport.Contact}</span></p>
        <p><span>Medical History:</span><span className="value">{sport.Medical}</span></p>
        <button onClick={onBack} className="back-button">Back to Home</button>
      </div>
    </div>
  );
};

export default SportDetails;
