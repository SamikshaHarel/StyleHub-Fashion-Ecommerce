import "./Search.css";

function Search() {

  return (

    <div className="search-page">

      <h1>AI Fashion Search 🔍</h1>

      <p>
        Upload image or search fashion styles
      </p>

      <div className="search-options">

        <button className="upload-btn">
          Upload Image 📷
        </button>

        <button className="camera-btn">
          Open Camera 🎥
        </button>

      </div>

      <div className="filter-section">

        <h2>Filters</h2>

        <select>
          <option>Category</option>
          <option>Outfits</option>
          <option>Accessories</option>
          <option>Makeup</option>
        </select>

        <select>
          <option>Style</option>
          <option>Korean</option>
          <option>Streetwear</option>
          <option>Party</option>
        </select>

        <select>
          <option>Color</option>
          <option>Black</option>
          <option>Pink</option>
          <option>White</option>
        </select>

      </div>

    </div>

  );
}

export default Search;