import { useEffect, useState } from "react";
import "./Favorites.css";

function Favorites() {

  const [favorites, setFavorites]
    = useState([]);

  useEffect(() => {

    const saved =
      JSON.parse(
        localStorage.getItem("favorites")
      ) || [];

    setFavorites(saved);

  }, []);

  return (

    <div className="favorites-page">

      <h1>Saved Styles ❤️</h1>

      <div className="grid">

        {favorites.map((item) => (

          <div
            className="fashion-card"
            key={item.id}
          >

            <img
              src="https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg"
              alt={item.name}
            />

            <div className="card-content">

              <h3>{item.name}</h3>

              <p>{item.tags}</p>

              {item.price && (
                <h4>₹ {item.price}</h4>
              )}

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Favorites;