import "./GameCard.css";

type Game = {
  id: number;
  title: string;
  game_description: string;
  game_url: string;
};

const GameCard = ({ game }: { game: Game }) => {
  return (
    <div className="game-card">
      <h2 className="game-card__title">{game.title}</h2>
      <p className="game-card__description">{game.game_description}</p>
      <a
        href={game.game_url}
        target="_blank"
        rel="noopener noreferrer"
        className="game-card__link link"
      >
        Jouer
      </a>
    </div>
  );
};

export default GameCard;
