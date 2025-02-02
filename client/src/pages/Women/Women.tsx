import { useEffect, useState } from "react";
import "./Women.css";
import WomanCard from "../../components/WomanCard/WomanCard";

type Woman = {
  id: number;
  woman_name: string;
  bio: string;
  image_url?: string;
  wiki_link?: string;
};

const Women = () => {
  const [women, setWomen] = useState<Woman[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/women")
      .then((res) => res.json())
      .then((data) => setWomen(data))
      .catch((error) => console.error("Error fetching women:", error));
  }, []);

  return (
    <div className="women-container">
      <h1 className="title">🌟 Femmes inspirantes de la tech</h1>
      <p className="description">
        L’informatique évolue sans cesse, et les femmes y jouent un rôle clé
        depuis ses débuts jusqu'à aujourd’hui !{" "}
        <section>
          {" "}
          🌟 Découvre des pionnières qui ont révolutionné la tech, mais aussi
          des expertes et innovatrices qui façonnent le monde numérique actuel.
        </section>{" "}
        Leurs contributions inspirent des générations entières. Qui sait,
        peut-être que la prochaine grande avancée viendra de toi ?
      </p>
      <div className="women-grid">
        {women.map((woman) => (
          <WomanCard key={woman.id} woman={woman} />
        ))}
      </div>
    </div>
  );
};

export default Women;
