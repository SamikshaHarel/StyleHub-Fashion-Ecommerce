import { useState } from "react";
import "../styles/Outfit.css";

const OutfitDetails = () => {
  const [category, setCategory] = useState("");
  const [outfits, setOutfits] = useState([]);

  const getRecommendations = async () => {
    const res = await fetch("http://localhost:8080/api/outfits/recommend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ category })
    });

    const data = await res.json();
    setOutfits(data.outfits);
  };

  return (
    <div className="outfit-container">

      <h2 className="title">StyleHub Outfit Recommendations</h2>

      {/* SELECT */}
      <select
        className="dropdown"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Select Fashion Industry</option>
        <option>Bollywood</option>
        <option>Hollywood</option>
        <option>K-POP</option>
        <option>Western Fashion</option>
      </select>

      <button className="btn" onClick={getRecommendations}>
        Get Recommendations
      </button>

      {/* CARDS */}
      <div className="card-container">
        {outfits.map((item, index) => (
          <div className="card" key={index}>
            <h3>Outfit Idea</h3>
            <p>{item}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default OutfitDetails;