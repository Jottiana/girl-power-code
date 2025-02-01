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
      <h1 className="women-title">🌟 Femmes inspirantes de la tech</h1>
      <div className="women-grid">
        {women.map((woman) => (
          <WomanCard key={woman.id} woman={woman} />
        ))}
      </div>
    </div>
  );
};

export default Women;
