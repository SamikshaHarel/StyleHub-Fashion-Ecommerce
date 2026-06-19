import { useState } from "react";
import "./Profile.css";

function Profile() {

  const [activeTab, setActiveTab] = useState("overview");

  const renderSection = () => {

    switch (activeTab) {

      case "overview":
        return (
          <div className="section-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="profile"
              className="profile-img"
            />

            <h2>Fashion Lover ✨</h2>
            <p>AI Stylist User</p>

            <div className="stats">
              <div>📦 Orders: 12</div>
              <div>❤️ Wishlist: 8</div>
              <div>🔥 Trend Score: 87%</div>
            </div>
          </div>
        );

      case "orders":
        return (
          <div className="section-card">
            <h2>📦 My Orders</h2>
            <p>No recent orders yet.</p>
          </div>
        );

      case "wishlist":
        return (
          <div className="section-card">
            <h2>❤️ Wishlist</h2>
            <p>Your saved fashion items will appear here.</p>
          </div>
        );

      case "creator":
        return (
          <div className="section-card">
            <h2>🎬 Creator Studio</h2>

            <input type="file" accept="video/*" />
            <br /><br />
            <input type="file" multiple accept="image/*" />

            <br /><br />
            <button>Upload Content 🚀</button>
          </div>
        );

      case "ai":
        return (
          <div className="section-card">
            <h2>🤖 AI Fashion Engine</h2>

            <ul>
              <li>📈 Viral Prediction</li>
              <li>🏷 Auto Hashtag Generator</li>
              <li>👗 Style Category Detection</li>
              <li>⭐ Influencer Match</li>
              <li>🔥 Engagement Score</li>
            </ul>
          </div>
        );

      case "settings":
        return (
          <div className="section-card">
            <h2>⚙ Settings</h2>

            <button>Edit Profile</button>
            <button>Privacy</button>
            <button>Notifications</button>
            <button className="logout">Logout</button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="profile-layout">

      {/* Sidebar */}
      <div className="sidebar">

        <h2>⭐ StyleHub</h2>

        <button onClick={() => setActiveTab("overview")}>👤 Profile</button>
        <button onClick={() => setActiveTab("orders")}>📦 Orders</button>
        <button onClick={() => setActiveTab("wishlist")}>❤️ Wishlist</button>
        <button onClick={() => setActiveTab("creator")}>🎬 Creator Studio</button>
        <button onClick={() => setActiveTab("ai")}>🤖 AI Tools</button>
        <button onClick={() => setActiveTab("settings")}>⚙ Settings</button>

      </div>

      {/* Main Content */}
      <div className="content">
        {renderSection()}
      </div>

    </div>
  );
}

export default Profile;