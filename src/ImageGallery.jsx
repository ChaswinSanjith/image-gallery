import { useState } from "react";

function ImageGallery() {
  const images = [
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1016/600/400",
    "https://picsum.photos/id/1018/600/400",
    "https://picsum.photos/id/1020/600/400"
  ];

  const [index, setIndex] = useState(0);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Image Gallery</h2>

      {/* Main Image */}
      <img
        src={images[index]}
        width="500"
        style={{ borderRadius: "10px" }}
      />

      <br /><br />

      {/* Buttons */}
      <button onClick={() => setIndex((index - 1 + images.length) % images.length)}>
        Prev
      </button>

      <button onClick={() => setIndex((index + 1) % images.length)}>
        Next
      </button>

      {/* Thumbnails */}
      <div style={{ marginTop: "20px" }}>
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            width="100"
            onClick={() => setIndex(i)}
            style={{
              margin: "5px",
              cursor: "pointer",
              border: index === i ? "3px solid blue" : "1px solid gray"
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;