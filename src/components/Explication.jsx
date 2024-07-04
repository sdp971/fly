import { useEffect, useState } from "react";
import image from "../assets/image.png";
import Button from "../components/Button";
import "./Explication.css";

function Explication({ texte, onclick }) {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    setShowComponent(true);
  }, []);

  return (
    // <div className={`explaination-container ${showComponent ? 'fade-in':"" }`}>
    <div
      className={`main-explication-container ${showComponent ? "show" : ""}`}
    >
      <div className="explication-container">
        <img src={image} alt="" className="explication-image" />
        <p>{texte}</p>
      </div>
      <div className="btn-next">
        <Button
          onclick={onclick}
          style={{
            width: "80%",
            border: "2px solid black",
            color: "#6A5AE0",
            borderRadius: "20px",
            height: "3rem",
            fontSize: "20px",
            gap: "20px",
            backgroundColor: "#FFEEB6",
          }}
        >
          SUIVANT
        </Button>
      </div>
    </div>
  );
}

export default Explication;
