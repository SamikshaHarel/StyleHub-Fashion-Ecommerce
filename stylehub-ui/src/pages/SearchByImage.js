import Navbar from "../components/Navbar";

function SearchByImage() {

  return (

    <div>

      <Navbar />

      <div
        style={{
          padding: "40px",
          textAlign: "center"
        }}
      >

        <h1>📸 AI Fashion Search</h1>

        <p>
          Upload image to find similar outfits
        </p>

        <input type="file" />

        <br /><br />

        <button>
          Search Style
        </button>

      </div>

    </div>
  );
}

export default SearchByImage;