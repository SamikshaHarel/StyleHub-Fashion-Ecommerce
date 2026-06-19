import { useState } from "react";
import "../styles/CreatorPage.css";

function CreatorPage() {
  const [title, setTitle] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [category, setCategory] = useState("");
  const [platform, setPlatform] = useState("");

  const [reelFile, setReelFile] = useState(null);
  const [photoFiles, setPhotoFiles] = useState([]);

  const publishTrend = () => {
    if (!title || !hashtags || !category) {
      alert("Please fill all trend details 🚨");
      return;
    }

    const trendData = {
      title,
      hashtags,
      category,
      platform,
      reelFile,
      photoFiles,
    };

    console.log("Published Trend:", trendData);

    alert("Trend Published Successfully 🚀");

    // reset
    setTitle("");
    setHashtags("");
    setCategory("");
    setPlatform("");
    setReelFile(null);
    setPhotoFiles([]);
  };

  return (
    <div className="creator-page">

      <h1>🎬 Creator Studio</h1>
      <p>Create reels, upload photos and set new fashion trends.</p>

      {/* Upload Reels */}
      <div className="creator-card">

        <h2>📹 Upload Reels</h2>

        <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
          <option value="">Select Platform</option>
          <option value="instagram">Instagram Reels</option>
          <option value="youtube">YouTube Shorts</option>
          <option value="facebook">Facebook Reels</option>
          <option value="snapchat">Snapchat Spotlight</option>
          <option value="pinterest">Pinterest</option>
        </select>

        <input
          type="file"
          accept="video/*"
          onChange={(e) => setReelFile(e.target.files[0])}
        />
      </div>

      {/* Upload Photos */}
      <div className="creator-card">

        <h2>📸 Upload Outfit Photos</h2>

        <input
          type="file"
          multiple
          accept="image/*"
          onChange={(e) => setPhotoFiles([...e.target.files])}
        />
      </div>

      {/* Set New Trend */}
      <div className="creator-card">

        <h2>🔥 Set New Trend</h2>

        <input
          type="text"
          placeholder="Trend Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Hashtags (#OOTD #Fashion)"
          value={hashtags}
          onChange={(e) => setHashtags(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option>Bollywood</option>
          <option>Hollywood</option>
          <option>K-POP</option>
          <option>Streetwear</option>
          <option>Luxury Fashion</option>
          <option>Vintage</option>
          <option>Casual Wear</option>
          <option>Party Wear</option>
        </select>

        <button className="publish-btn" onClick={publishTrend}>
          Publish Trend 🚀
        </button>
      </div>

      {/* AI Feature */}
      <div className="creator-card ai-section">

        <h2>🤖 AI Trend Predictor</h2>

        <p>Upload your reel and AI will predict:</p>

        <ul>
          <li>📈 Viral Probability</li>
          <li>🏷 Trending Hashtags</li>
          <li>👗 Fashion Category</li>
          <li>⭐ Similar Influencer Styles</li>
          <li>🔥 Popularity Score</li>
        </ul>

      </div>

    </div>
  );
}

export default CreatorPage;