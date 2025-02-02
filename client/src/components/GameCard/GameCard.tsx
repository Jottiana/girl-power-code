import "./GameCard.css";

type Game = {
  id: number;
  title: string;
  game_description: string;
  game_url: string;
};

const GameCard = ({ game }: { game: Game }) => {
  return (
    <article className="game-card" aria-labelledby={`game-${game.id}-title`}>
      <h2 id={`game-${game.id}-title`} className="game-card__title">
        {game.title}
      </h2>
      <p className="game-card__description">{game.game_description}</p>
      <a
        href={game.game_url}
        target="_blank"
        rel="noopener noreferrer"
        className="game-card__link link"
        aria-label={`Jouer à ${game.title}`}
      >
        Jouer
      </a>
    </article>
  );
};

export default GameCard;
