import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">
        🚀 Explore, Joue, Code : Le futur de la tech commence avec toi !
      </h1>
      <p className="home-description">
        ✨ Découvre les femmes inspirantes qui ont marqué l'histoire de la tech
        et apprends à coder en t'amusant !
      </p>
      <div className="home-buttons">
        <button
          type="button"
          className="home-button"
          onClick={() => navigate("/women")}
          aria-label="Découvrir les femmes dans la tech"
        >
          Les femmes dans la tech
        </button>
        <button
          type="button"
          className="home-button"
          onClick={() => navigate("/games")}
          aria-label="Apprendre à coder en jouant"
        >
          Apprendre à coder en jouant
        </button>
      </div>
    </div>
  );
};

export default Home;
