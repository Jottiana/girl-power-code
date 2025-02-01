import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">
        🚀 Explore, Joue, Code : Le futur de la tech commence avec toi !
      </h1>
      <p className="description">
        ✨ Bienvenue sur Girl Power Code !{" "}
        <section>
          {" "}
          Ici, les jeunes filles curieuses découvrent l’univers passionnant de
          l’informatique à travers des histoires inspirantes de femmes qui ont
          changé le monde et des jeux ludiques pour apprendre à coder.{" "}
        </section>
        Parce que la tech, c’est aussi pour toi, lance-toi et explore ! 👩‍💻✨
      </p>
      <div className="home-buttons">
        <button
          type="button"
          className="home-button button"
          onClick={() => navigate("/women")}
          aria-label="Découvrir les femmes dans la tech"
        >
          Les femmes <br /> dans la tech
        </button>
        <button
          type="button"
          className="home-button button"
          onClick={() => navigate("/games")}
          aria-label="Apprendre à coder en jouant"
        >
          Joue <br /> et apprends à coder
        </button>
      </div>
    </div>
  );
};

export default Home;
