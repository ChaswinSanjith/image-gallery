import ImageCard from "./components/ImageCard";
import images from "./data/images";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="title">Dynamic Image Gallery</h1>

      <div className="gallery">
        {images.map((img) => (
          <ImageCard key={img.id} image={img} />
        ))}
      </div>
    </>
  );
}

export default App;