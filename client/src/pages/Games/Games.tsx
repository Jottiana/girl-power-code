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
      <h1 className="games-title">🎮 Apprendre en jouant</h1>
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
