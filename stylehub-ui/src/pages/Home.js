import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CategorySlider from "../components/CategorySlider";
import Navbar from "../components/Navbar";

import "./Home.css";

function Home() {

  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(false);

  // LIVE AI TREND

  const [liveTrend, setLiveTrend] = useState(
    "Quiet Luxury"
  );

  // HERO IMAGE SLIDER

  const heroImages = [

    "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg",

    "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg",

    "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",

    "https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg"

  ];

  const [currentImage, setCurrentImage] =
    useState(0);

  // TREND DATA

  const trends = [

    "Quiet Luxury",
    "Old Money",
    "Streetwear",
    "Korean Minimal",
    "Coquette",
    "Y2K",
    "Airport Fashion",
    "Soft Girl",
    "Luxury Minimal",
    "Pinterest Aesthetic"

  ];

  // AUTO CHANGING TREND

  useEffect(() => {

    const interval = setInterval(() => {

      setLiveTrend(

        trends[
          Math.floor(
            Math.random() * trends.length
          )
        ]

      );

    }, 3000);

    return () =>
      clearInterval(interval);

  }, [trends]);

  // AUTO CHANGING HERO IMAGE

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentImage((prev) =>

        prev === heroImages.length - 1
          ? 0
          : prev + 1

      );

    }, 3000);

    return () =>
      clearInterval(interval);

  }, [heroImages.length]);

  // DARK MODE

  useEffect(() => {

    if (darkMode) {

      document.body.classList.add(
        "dark"
      );

    } else {

      document.body.classList.remove(
        "dark"
      );

    }

  }, [darkMode]);

  // CATEGORY REDIRECT

  const handleSearch = (value) => {

    navigate(`/explore/${value}`);

  };

  // TRENDING CATEGORIES

  const trendingPlaces = [

    "Quiet Luxury",
    "Old Money",
    "Streetwear",
    "Korean Minimal",
    "Airport Fit",
    "Y2K",
    "Coquette",
    "Luxury",
    "Beach Vacation",
    "Wedding Guest",
    "Formal",
    "Minimal",
    "Pinterest",
    "Soft Girl",
    "Black Outfit",
    "Cafe Outfit",
    "Date Night",
    "Vacation Look"

  ];

  return (

    <div className="container">

      {/* NAVBAR */}

      <Navbar />

      {/* HERO SECTION */}

      <section className="hero-section">

        {/* LEFT */}

        <div className="hero-left">

          {/* BADGE */}

          <div className="hero-badge">

            <span className="live-indicator"></span>

            AI Trend Engine Active

          </div>

          {/* TITLE */}

          <h1 className="hero-title">

            Discover
            <br />

            The Future
            <br />

            Of Fashion

          </h1>

          {/* DESCRIPTION */}

          <p className="hero-description">

            AI-powered styling platform
            delivering personalized aesthetics,
            real-time fashion intelligence,
            outfit inspiration,
            trend forecasting
            and aesthetic discovery.

          </p>

          {/* LIVE TREND CARD */}

          <div className="live-trend-card">

            <span className="trend-label">

              LIVE TREND

            </span>

            <h3>
              {liveTrend}
            </h3>

            <p>

              AI detected rising aesthetic

            </p>

          </div>

          {/* BUTTONS */}

          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={() =>
                navigate("/explore")
              }
            >

              Explore Styles

            </button>

            <button
              className="secondary-btn"
              onClick={() =>
                setDarkMode(!darkMode)
              }
            >

              {darkMode
                ? "Light Mode"
                : "Dark Mode"}

            </button>

          </div>

        </div>

        {/* RIGHT */}

        <div className="hero-right">

          {/* MAIN IMAGE */}

          <div className="hero-main-card">

            <img
            src={heroImages[currentImage]}
            alt="Fashion"
            className="hero-main-image"
            />

            <div className="hero-main-overlay">

              <span>

                AI GENERATED STYLE

              </span>

              <h2>

                Korean Luxury Minimal

              </h2>

            </div>

          </div>

          {/* FLOATING CARD 1 */}

          <div className="floating-card top-card">

            <h4>

              AI Match

            </h4>

            <p>

              92% Accuracy

            </p>

          </div>

          {/* FLOATING CARD 2 */}

          <div className="floating-card bottom-card">

            <h4>

              Trending

            </h4>

            <p>

              #OldMoney

            </p>

          </div>

        </div>

      </section>

      {/* LIVE TREND BAR */}

      <section className="live-trends">

        <div className="live-dot"></div>

        <span>

          LIVE AI TREND ANALYSIS

        </span>

      <div className="marquee">

  <div className="marquee-content">

    Quiet Luxury ↑ •
    Korean Minimal ↑ •
    Streetwear ↑ •
    Old Money ↑ •
    Coquette ↑ •
    Pinterest Fashion ↑ •
    AI Style Matching ↑ •
    Quiet Luxury ↑ •
    Korean Minimal ↑ •
    Streetwear ↑ •
    Old Money ↑ •

  </div>

</div>

      </section>

      {/* STATS */}

      <section className="stats-section">

        <div className="stat-card">

          <h2>10K+</h2>

          <p>

            Fashion Inspirations

          </p>

        </div>

        <div className="stat-card">

          <h2>92%</h2>

          <p>

            AI Accuracy

          </p>

        </div>

        <div className="stat-card">

          <h2>50+</h2>

          <p>

            Style Categories

          </p>

        </div>

        <div className="stat-card">

          <h2>24/7</h2>

          <p>

            Trend Monitoring

          </p>

        </div>

      </section>

      {/* TRENDING SECTION */}

      <section className="trending-section">

        <div className="section-header">

          <h2>

            Trending Aesthetics

          </h2>

          <p>

            Real-time AI curated fashion
            aesthetics from modern culture

          </p>

        </div>

        <div className="trend-grid">

          <div className="trend-pill">
            #QuietLuxury
          </div>

          <div className="trend-pill">
            #OldMoney
          </div>

          <div className="trend-pill">
            #KoreanMinimal
          </div>

          <div className="trend-pill">
            #Streetwear2026
          </div>

          <div className="trend-pill">
            #CoquetteCore
          </div>

          <div className="trend-pill">
            #LuxuryAesthetic
          </div>

          <div className="trend-pill">
            #PinterestFit
          </div>

          <div className="trend-pill">
            #AirportLooks
          </div>

          <div className="trend-pill">
            #SoftGirl
          </div>

          <div className="trend-pill">
            #Y2KRevival
          </div>

        </div>

      </section>

      {/* CATEGORY SLIDER */}

      <section className="slider-wrapper">

        <div className="section-header">

          <h2>

            Explore Categories

          </h2>

          <p>

            AI-generated fashion inspirations
            personalized for your vibe

          </p>

        </div>

        <CategorySlider
          trendingPlaces={trendingPlaces}
          fetchTrending={handleSearch}
        />

      </section>

      {/* FEATURED SECTION */}

      <section className="featured-section">

        {/* LEFT */}

        <div className="featured-left">

          <div className="featured-overlay">

            <span>

              AI PICK OF THE DAY

            </span>

            <h2>

              Luxury Korean Minimal

            </h2>

            <p>

              Personalized fashion
              recommendation generated
              using AI trend analysis.

            </p>

            <button
              onClick={() =>
                navigate("/explore/korean")
              }
            >

              Explore Look

            </button>

          </div>

        </div>

        {/* RIGHT */}

        <div className="featured-right">

          <div className="mini-card">

            <img
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
              alt=""
            />

            <div className="mini-content">

              <h3>

                Editorial Fashion

              </h3>

              <p>

                AI detected trending fit

              </p>

            </div>

          </div>

          <div className="mini-card">

            <img
              src="https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg"
              alt=""
            />

            <div className="mini-content">

              <h3>

                Modern Makeup

              </h3>

              <p>

                Viral beauty aesthetic

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* AI FEATURES */}

      <section className="ai-section">

        <div className="section-header">

          <h2>

            AI Fashion Features

          </h2>

          <p>

            Next-generation fashion intelligence
            built for modern creators

          </p>

        </div>

        <div className="ai-grid">

          <div className="ai-card">

            <div className="ai-icon">

              ✨

            </div>

            <h3>

              AI Outfit Detection

            </h3>

            <p>

              Detect aesthetics,
              fashion categories
              and outfit styles
              instantly using AI.

            </p>

          </div>

          <div className="ai-card">

            <div className="ai-icon">

              🎨

            </div>

            <h3>

              Color Intelligence

            </h3>

            <p>

              Smart color analysis
              based on skin tone,
              fashion psychology
              and live trends.

            </p>

          </div>

          <div className="ai-card">

            <div className="ai-icon">

              📈

            </div>

            <h3>

              Live Trend Forecasting

            </h3>

            <p>

              Track real-time fashion
              trends from social media,
              creators and global culture.

            </p>

          </div>

          <div className="ai-card">

            <div className="ai-icon">

              🧠

            </div>

            <h3>

              Smart AI Recommendations

            </h3>

            <p>

              Personalized styling
              recommendations based
              on your aesthetic vibe.

            </p>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="cta-section">

        <h2>

          Ready To Discover Your Style?

        </h2>

        <p>

          Explore AI-generated fashion
          recommendations personalized
          for your aesthetic.

        </p>

        <button
          onClick={() =>
            navigate("/explore")
          }
        >

          Start Exploring

        </button>

      </section>

      {/* FOOTER */}

      <footer className="footer">

        <div className="footer-top">

          <div>

            <h2 className="footer-logo">

              StyleHub AI

            </h2>

            <p className="footer-small">

              Fashion Intelligence

            </p>

            <p className="footer-text">

              AI-powered fashion
              intelligence platform
              helping users discover
              personalized aesthetics,
              trends and styling inspiration.

            </p>

          </div>

          <div className="footer-links">

            <div>

              <h4>

                Platform

              </h4>

              <p>Explore</p>

              <p>Trending</p>

              <p>Favorites</p>

              <p>Discover</p>

            </div>

            <div>

              <h4>

                AI Features

              </h4>

              <p>Outfit Detection</p>

              <p>Color Intelligence</p>

              <p>Trend Forecasting</p>

              <p>AI Matching</p>

            </div>

            <div>

              <h4>

                Social

              </h4>

              <p>Instagram</p>

              <p>Pinterest</p>

              <p>TikTok</p>

              <p>Twitter</p>

            </div>

          </div>

        </div>

        <div className="footer-bottom">

          <p>

            © 2026 StyleHub — AI Fashion Platform

          </p>

        </div>

      </footer>

    </div>

  );

}

export default Home;