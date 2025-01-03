import React, { useState } from 'react';
import './PlayerForm.css';

const PlayerForm = () => {
    const [sportCategory, setSportCategory] = useState('');
    const [medicalHistory, setMedicalHistory] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        Age: '',
        Gender: 'Male',
        TeamName: '',
        Position: '',
        Experience: '',
        TrainingHours: '',
        Contact: '',
        Medical: '',
        otherSportCategory: '',
        otherMedicalHistory: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSportCategoryChange = (e) => {
        const value = e.target.value;
        setSportCategory(value);
        setFormData({ ...formData, Position: '', otherSportCategory: '' });
    };

    const handleMedicalHistoryChange = (e) => {
        const value = e.target.value;
        setMedicalHistory(value);
        setFormData({ ...formData, otherMedicalHistory: '' });
    };

    const positions = {
        Athletics: ['Sprinter', 'Long Jumper', 'High Jumper'],
        Tennis: ['Singles', 'Doubles', 'Mixed Doubles'],
        Football: ['Goalkeeper', 'Defender', 'Midfielder', 'Forward'],
        Basketball: ['Point Guard', 'Shooting Guard', 'Small Forward', 'Power Forward', 'Center'],
        Cricket: ['Batsman', 'Bowler', 'All-rounder', 'Wicketkeeper'],
        Volleyball: ['Outside Hitter', 'Setter', 'Libero', 'Middle Blocker']
    };

    const handleSubmit = async () => {
        const payload = {
            id: '1', // Assuming the API generates the ID, we can hardcode it as '1' or handle it if required
            name: formData.name,
            Age: formData.Age,
            Gender: formData.Gender,
            Category: sportCategory === 'Other' ? formData.otherSportCategory : sportCategory,
            TeamName: formData.TeamName,
            Position: formData.Position,
            Experience: formData.Experience,
            TrainingHours: formData.TrainingHours,
            Contact: formData.Contact,
            Medical: medicalHistory === 'Other' ? formData.otherMedicalHistory : medicalHistory
        };
    
        try {
            const response = await fetch("https://67544b5636bcd1eec850c0ea.mockapi.io/Sports", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
    
            if (response.ok) {
                alert("Player Detail Submitted");
                setFormData({
                    name: '',
                    Age: '',
                    Gender: 'Male',
                    TeamName: '',
                    Position: '',
                    Experience: '',
                    TrainingHours: '',
                    Contact: '',
                    Medical: '',
                    otherSportCategory: '',
                    otherMedicalHistory: ''
                });
                setSportCategory('');
                setMedicalHistory('');
            } else {
                throw new Error(`Failed to submit: ${response.status}`);
            }
        } catch (error) {
            console.error("Error submitting player details:", error);
        }
    };
    

    return (
        <div className="form-container">
            <h1>Enter Player Details</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="name">Player Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />

                <label htmlFor="Age">Age:</label>
                <input type="number" id="Age" name="Age" value={formData.Age} onChange={handleInputChange} min="1" required />

                <label htmlFor="Gender">Gender:</label>
                <select id="Gender" name="Gender" value={formData.Gender} onChange={handleInputChange} required>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>

                <label htmlFor="sportCategory">Sport Category:</label>
                <select id="sportCategory" name="sportCategory" value={sportCategory} onChange={handleSportCategoryChange} required>
                    <option value="">--Select a Sport Category--</option>
                    {Object.keys(positions).map((key) => (
                        <option key={key} value={key}>{key}</option>
                    ))}
                    <option value="Other">Other</option>
                </select>

                {sportCategory === 'Other' && (
                    <div>
                        <label htmlFor="otherSportCategory">Please specify:</label>
                        <input type="text" id="otherSportCategory" name="otherSportCategory" value={formData.otherSportCategory} onChange={handleInputChange} placeholder="Enter your sport" />
                    </div>
                )}

                <label htmlFor="TeamName">Team Name:</label>
                <input type="text" id="TeamName" name="TeamName" value={formData.TeamName} onChange={handleInputChange} required />

                <label htmlFor="Position">Position:</label>
                <select id="Position" name="Position" value={formData.Position} onChange={handleInputChange} required>
                    <option value="">--Select Position--</option>
                    {(positions[sportCategory] || []).map((position) => (
                        <option key={position} value={position}>{position}</option>
                    ))}
                </select>

                <label htmlFor="Experience">Experience (in Years):</label>
                <input type="number" id="Experience" name="Experience" value={formData.Experience} onChange={handleInputChange} min="0" required />

                <label htmlFor="TrainingHours">Training Hours per Week:</label>
                <input type="number" id="TrainingHours" name="TrainingHours" value={formData.TrainingHours} onChange={handleInputChange} min="1" required />

                <label htmlFor="Contact">Emergency Contact:</label>
                <input type="tel" id="Contact" name="Contact" value={formData.Contact} onChange={handleInputChange} required />

                <label htmlFor="Medical">Medical History:</label>
                <select id="Medical" name="Medical" value={medicalHistory} onChange={handleMedicalHistoryChange} required>
                    <option value="Asthma">Asthma</option>
                    <option value="Diabetes">Diabetes</option>
                    <option value="Heart Condition">Heart Condition</option>
                    <option value="Allergies">Allergies</option>
                    <option value="Injuries">Injuries</option>
                    <option value="Other">Other</option>
                </select>

                {medicalHistory === 'Other' && (
                    <div>
                        <label htmlFor="otherMedicalHistory">Please specify:</label>
                        <input type="text" id="otherMedicalHistory" name="otherMedicalHistory" value={formData.otherMedicalHistory} onChange={handleInputChange} placeholder="Enter if any" />
                    </div>
                )}

                <button type="button" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
};

export default PlayerForm;
