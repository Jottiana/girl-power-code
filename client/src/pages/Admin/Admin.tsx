import { useEffect, useState } from "react";
import "./Admin.css";

type Woman = {
  id: number;
  woman_name: string;
  bio: string;
  image_url?: string;
  wiki_link?: string;
};

type Game = {
  id: number;
  title: string;
  game_description: string;
  game_url: string;
};

const Admin = () => {
  const [women, setWomen] = useState<Woman[]>([]);
  const [games, setGames] = useState<Game[]>([]);

  const [newWoman, setNewWoman] = useState({
    woman_name: "",
    bio: "",
    image_url: "",
    wiki_link: "",
  });
  const [newGame, setNewGame] = useState({
    title: "",
    game_description: "",
    game_url: "",
  });

  const [editingWoman, setEditingWoman] = useState<Woman | null>(null);
  const [editingGame, setEditingGame] = useState<Game | null>(null);

  useEffect(() => {
    fetch("http://localhost:3310/api/women")
      .then((res) => res.json())
      .then((data) => setWomen(data));

    fetch("http://localhost:3310/api/games")
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);

  const handleAddWoman = (e: React.FormEvent) => {
    e.preventDefault();
    fetch("http://localhost:3310/api/women", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newWoman),
    })
      .then((res) => res.json())
      .then((data) => setWomen([...women, { id: data.insertId, ...newWoman }]));
  };

  const handleUpdateWoman = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingWoman) return;

    fetch(`http://localhost:3310/api/women/${editingWoman.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editingWoman),
    }).then(() => {
      setWomen(
        women.map((woman) =>
          woman.id === editingWoman.id ? editingWoman : woman,
        ),
      );
      setEditingWoman(null);
    });
  };

  const handleDeleteWoman = (id: number) => {
    const isConfirmed = window.confirm(
      "Es-tu sûr·e de vouloir supprimer cette personne ?",
    );
    if (!isConfirmed) return;

    fetch(`http://localhost:3310/api/women/${id}`, { method: "DELETE" }).then(
      () => setWomen(women.filter((woman) => woman.id !== id)),
    );
  };

  const handleAddGame = (e: React.FormEvent) => {
    e.preventDefault();
    fetch("http://localhost:3310/api/games", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGame),
    })
      .then((res) => res.json())
      .then((data) => setGames([...games, { id: data.insertId, ...newGame }]));
  };

  const handleUpdateGame = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingGame) return;

    fetch(`http://localhost:3310/api/games/${editingGame.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editingGame),
    }).then(() => {
      setGames(
        games.map((game) => (game.id === editingGame.id ? editingGame : game)),
      );
      setEditingGame(null);
    });
  };

  const handleDeleteGame = (id: number) => {
    const isConfirmed = window.confirm(
      "Es-tu sûr·e de vouloir supprimer ce jeu ?",
    );
    if (!isConfirmed) return;

    fetch(`http://localhost:3310/api/games/${id}`, { method: "DELETE" }).then(
      () => setGames(games.filter((game) => game.id !== id)),
    );
  };

  return (
    <section className="admin-container">
      <h1 className="title">🔧 Espace Admin</h1>

      <div className="admin-section">
        <h2>Ajouter une Femme Inspirante</h2>
        <form onSubmit={handleAddWoman}>
          <input
            type="text"
            placeholder="Nom"
            value={newWoman.woman_name}
            onChange={(e) =>
              setNewWoman({ ...newWoman, woman_name: e.target.value })
            }
            required
          />
          <textarea
            placeholder="Bio"
            value={newWoman.bio}
            onChange={(e) => setNewWoman({ ...newWoman, bio: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="URL Image"
            value={newWoman.image_url}
            onChange={(e) =>
              setNewWoman({ ...newWoman, image_url: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Lien Wikipédia"
            value={newWoman.wiki_link}
            onChange={(e) =>
              setNewWoman({ ...newWoman, wiki_link: e.target.value })
            }
          />
          <button type="submit" className="button">
            Ajouter
          </button>
        </form>
      </div>

      <div className="admin-grid">
        {women.map((woman) => (
          <div key={woman.id} className="admin-card">
            <h3>{woman.woman_name}</h3>
            <button
              type="button"
              onClick={() => setEditingWoman(woman)}
              className="button edit-button"
            >
              Modifier
            </button>
            <button
              type="button"
              onClick={() => handleDeleteWoman(woman.id)}
              className="button delete-button"
            >
              Supprimer
            </button>
          </div>
        ))}
      </div>

      {editingWoman && (
        <form onSubmit={handleUpdateWoman} className="admin-section">
          <h2>Modifier {editingWoman.woman_name}</h2>
          <input
            type="text"
            value={editingWoman.woman_name}
            onChange={(e) =>
              setEditingWoman({ ...editingWoman, woman_name: e.target.value })
            }
            required
          />
          <textarea
            value={editingWoman.bio}
            onChange={(e) =>
              setEditingWoman({ ...editingWoman, bio: e.target.value })
            }
            required
          />
          <button type="submit" className="button">
            Enregistrer
          </button>
        </form>
      )}

      <div className="admin-section">
        <h2>Ajouter un Jeu</h2>
        <form onSubmit={handleAddGame}>
          <input
            type="text"
            placeholder="Titre"
            value={newGame.title}
            onChange={(e) => setNewGame({ ...newGame, title: e.target.value })}
            required
          />
          <textarea
            placeholder="Description"
            value={newGame.game_description}
            onChange={(e) =>
              setNewGame({ ...newGame, game_description: e.target.value })
            }
            required
          />
          <input
            type="text"
            placeholder="Lien du jeu"
            value={newGame.game_url}
            onChange={(e) =>
              setNewGame({ ...newGame, game_url: e.target.value })
            }
            required
          />
          <button type="submit" className="button">
            Ajouter
          </button>
        </form>
      </div>

      <div className="admin-grid">
        {games.map((game) => (
          <div key={game.id} className="admin-card">
            <h3>{game.title}</h3>
            <button
              type="button"
              onClick={() => setEditingGame(game)}
              className="button edit-button"
            >
              Modifier
            </button>
            <button
              type="button"
              onClick={() => handleDeleteGame(game.id)}
              className="button delete-button"
            >
              Supprimer
            </button>
          </div>
        ))}
      </div>

      {editingGame && (
        <form onSubmit={handleUpdateGame} className="admin-section">
          <h2>Modifier {editingGame.title}</h2>
          <input
            type="text"
            value={editingGame.title}
            onChange={(e) =>
              setEditingGame({ ...editingGame, title: e.target.value })
            }
            required
          />
          <textarea
            value={editingGame.game_description}
            onChange={(e) =>
              setEditingGame({
                ...editingGame,
                game_description: e.target.value,
              })
            }
            required
          />
          <button type="submit" className="button">
            Enregistrer
          </button>
        </form>
      )}
    </section>
  );
};

export default Admin;
