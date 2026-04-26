import { useEffect } from "react";
import "../App.css";

function Modal({ images, index, setSelected }) {
  const next = () => {
    setSelected((index + 1) % images.length);
  };

  const prev = () => {
    setSelected((index - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") setSelected(null);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [index]);

  return (
    <div className="modal">
      <span className="close" onClick={() => setSelected(null)}>×</span>

      <button onClick={prev}>Prev</button>

      <img src={images[index].url} className="modal-img" />

      <button onClick={next}>Next</button>
    </div>
  );
}

export default Modal;