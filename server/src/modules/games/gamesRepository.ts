import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Game = {
  id: number;
  title: string;
  description: string;
  url: string;
};

class GamesRepository {
  async create(game: Omit<Game, "id">) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO game (title, description, url) VALUES (?, ?, ?)",
      [game.title, game.description, game.url],
    );

    return result.insertId;
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM game WHERE id = ?",
      [id],
    );

    return rows[0] as Game | null;
  }

  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM game");

    return rows as Game[];
  }

  async update(id: number, game: Omit<Game, "id">) {
    const [result] = await databaseClient.query<Result>(
      "UPDATE game SET title = ?, description = ?, url = ? WHERE id = ?",
      [game.title, game.description, game.url, id],
    );

    return result.affectedRows;
  }

  async delete(id: number) {
    await databaseClient.query("DELETE FROM game WHERE id = ?", [id]);
  }
}

export default new GamesRepository();
