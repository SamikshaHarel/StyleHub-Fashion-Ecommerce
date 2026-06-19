import "./FashionCard.css";

function FashionCard({
  item,
  selectedCategory,
  saveFavorite
}) {

  const imageUrl =

    selectedCategory === "outfits"

      ? "https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg"

      : selectedCategory === "poses"

      ? "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"

      : selectedCategory === "accessories"

      ? "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg"

      : "https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg";

  return (

    <div className="fashion-card">

      <img
        src={imageUrl}
        alt={item.name}
      />

      <div className="card-content">

        <h3>{item.name}</h3>

        <p>
          {item.tags || item.description}
        </p>

        {item.price && (
          <h4>₹ {item.price}</h4>
        )}

        {selectedCategory ===
          "outfits" && (

          <button
            className="save-btn"
            onClick={() =>
              saveFavorite(item)
            }
          >
            ❤️ Save
          </button>

        )}

      </div>

    </div>

  );
}

export default FashionCard;