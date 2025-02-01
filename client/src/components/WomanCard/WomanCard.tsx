import "./WomanCard.css";

type Woman = {
  id: number;
  woman_name: string;
  bio: string;
  image_url?: string;
  wiki_link?: string;
};

const WomanCard = ({ woman }: { woman: Woman }) => {
  return (
    <div className="woman-card">
      {woman.image_url && (
        <img
          src={woman.image_url}
          alt={woman.woman_name}
          className="woman-card__image"
        />
      )}
      <h2 className="woman-card__name">{woman.woman_name}</h2>
      <p className="woman-card__bio">{woman.bio}</p>
      {woman.wiki_link && (
        <a
          href={woman.wiki_link}
          target="_blank"
          rel="noopener noreferrer"
          className="woman-card__link link"
        >
          En savoir plus
        </a>
      )}
    </div>
  );
};

export default WomanCard;
