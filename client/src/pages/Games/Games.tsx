import { useEffect, useState } from "react";
import "./Games.css";
import GameCard from "../../components/GameCard/GameCard";

type Game = {
  id: number;
  title: string;
  game_description: string;
  game_url: string;
};

const Games = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/games")
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((error) => console.error("Error fetching games:", error));
  }, []);

  return (
    <div className="games-container">
      <h1 className="title">🎮 Joue et apprends à coder !</h1>
      <p className="description">
        Apprendre à coder peut être aussi amusant qu’un jeu d’aventure !{" "}
        <section>
          🎮 Grâce à ces plateformes interactives, tu peux créer tes propres
          histoires, résoudre des défis et apprendre la programmation en
          t’amusant.
        </section>{" "}
        Prête à relever le défi ? Clique sur un jeu et lance-toi dans l’univers
        passionnant du code !
      </p>
      <div className="games-grid">
        {games.length > 0 ? (
          games.map((game) => <GameCard key={game.id} game={game} />)
        ) : (
          <p className="games-loading">Chargement des jeux...</p>
        )}
      </div>
    </div>
  );
};

export default Games;
