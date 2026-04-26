import { useState, useEffect } from "react";
import Modal from "./Modal";
import "../App.css";

function Gallery() {
  const images = [
    { id: 1, url: "https://picsum.photos/id/1015/400/300", title: "Mountain", category: "nature" },
    { id: 2, url: "https://picsum.photos/id/1016/400/300", title: "Forest", category: "nature" },
    { id: 3, url: "https://picsum.photos/id/1020/400/300", title: "City", category: "tech" },
    { id: 4, url: "https://picsum.photos/id/1024/400/300", title: "Dog", category: "animal" },
    { id: 5, url: "https://picsum.photos/id/1035/400/300", title: "River", category: "nature" },
    { id: 6, url: "https://picsum.photos/id/1040/400/300", title: "Laptop", category: "tech" }
  ];

  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");
  const [liked, setLiked] = useState([]);

  // Load likes from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("likes")) || [];
    setLiked(saved);
  }, []);

  // Save likes
  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(liked));
  }, [liked]);

  const toggleLike = (id) => {
    if (liked.includes(id)) {
      setLiked(liked.filter((item) => item !== id));
    } else {
      setLiked([...liked, id]);
    }
  };

  const filteredImages = images.filter((img) =>
    img.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      {/* Search */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search images..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Gallery */}
      <div className="gallery">
        {filteredImages.map((img, index) => (
          <div key={img.id} className="card">
            <img
              src={img.url}
              className="gallery-img"
              onClick={() => setSelected(index)}
            />

            <p>{img.title}</p>

            <button onClick={() => toggleLike(img.id)}>
              {liked.includes(img.id) ? "❤️" : "🤍"}
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected !== null && (
        <Modal
          images={filteredImages}
          index={selected}
          setSelected={setSelected}
        />
      )}
    </div>
  );
}

export default Gallery;