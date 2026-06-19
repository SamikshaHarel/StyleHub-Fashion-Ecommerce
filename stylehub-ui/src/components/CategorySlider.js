import "./CategorySlider.css";

function CategorySlider({
  trendingPlaces,
  fetchTrending
}) {

  return (

    <div className="slider-wrapper">

      <h2 className="slider-title">
        🔥 Trending AI Fashion Moods
      </h2>

      <div className="slider">

        {trendingPlaces.map((item, index) => (

          <button
            key={index}
            className="slider-btn"
            onClick={() =>
              fetchTrending(item)
            }
          >
            {item}
          </button>

        ))}

      </div>

    </div>

  );
}

export default CategorySlider;