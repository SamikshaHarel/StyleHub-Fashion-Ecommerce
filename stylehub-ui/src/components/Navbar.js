import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/stylehub-logo.png";

function Navbar() {

  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (

    <nav className="navbar">

      {/* LOGO */}
      <div className="logo-section">

        <img
          src={logo}
          alt="StyleHub Logo"
          className="logo-img"
        />

        <div className="logo-text-wrap">

          <h2 className="logo-text">
            StyleHub
          </h2>

          <span className="logo-tagline">
            AI Fashion Intelligence
          </span>

        </div>

      </div>

      {/* CENTER LINKS */}

      <div className="nav-center">

        <Link to="/">Home</Link>

        <Link to="/explore">Explore</Link>

        <Link to="/favorites">Favorites</Link>

      </div>


      {/* PROFILE */}

      <div className="nav-icons">

        <button
          className="profile-icon"
          onClick={() => setShowProfile(!showProfile)}
        >
          👤
        </button>

        {showProfile && (

          <div className="profile-menu">

            <Link to="/profile">
              My Profile
            </Link>

            <Link to="/orders">
              Orders
            </Link>

            <Link to="/wishlist">
              Wishlist
            </Link>

            <Link to="/settings">
              Settings
            </Link>

            <Link to="/creator">
              Creator Studio
            </Link>

            <Link to="/help">
              Help Center
            </Link>

            <Link to="/contact">
              Contact Us
            </Link>

            <button onClick={logout}>
              Logout
            </button>

          </div>

        )}

      </div>

    </nav>

  );

}

export default Navbar;