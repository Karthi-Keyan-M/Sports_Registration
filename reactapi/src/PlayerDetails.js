import React, { useState, useEffect } from "react";
import "./PlayerDetails.css"; // Optional, for styling the table

const PlayerDetails = () => {
  const [players, setPlayers] = useState([]);

  // Fetch player data when the component mounts
  useEffect(() => {
    fetch("https://67544b5636bcd1eec850c0ea.mockapi.io/Sports")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setPlayers(data); // Update state with fetched data
      })
      .catch((err) => {
        console.error("Error fetching data: ", err);
      });
  }, []);
  

  return (
    <div className="container">
      <h1>Player Details</h1>
      <table id="playerTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Sport Category</th>
            <th>Team Name</th>
            <th>Position</th>
            <th>Experience</th>
            <th>Training Hours</th>
            <th>Emergency Contact</th>
            <th>Medical History</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id}>
              <td>{player.name}</td>
              <td>{player.Age}</td>
              <td>{player.Gender}</td>
              <td>{player.Category}</td>
              <td>{player.TeamName}</td>
              <td>{player.Position}</td>
              <td>{player.Experience}</td>
              <td>{player.TrainingHours}</td>
              <td>{player.Contact}</td>
              <td>{player.Medical}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerDetails;
