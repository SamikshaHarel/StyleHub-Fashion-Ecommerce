function HeroSection({
  place,
  setPlace,
  fetchStyle
}) {
  return (
    <div className="hero">

      <h1 className="title">
        StyleHub ✨
      </h1>

      <p className="subtitle">
        AI-powered fashion inspiration
        for every vibe 💖
      </p>

      <div className="search-box">

        <input
          type="text"
          placeholder="Search style vibe..."
          value={place}
          onChange={(e) =>
            setPlace(e.target.value)
          }
        />

        <button onClick={fetchStyle}>
          Discover
        </button>

      </div>

    </div>
  );
}

export default HeroSection;