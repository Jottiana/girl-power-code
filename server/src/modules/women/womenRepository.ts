import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Woman = {
  id: number;
  woman_name: string;
  bio: string;
  image_url?: string;
  wiki_link?: string;
};

class WomenRepository {
  async create(woman: Omit<Woman, "id">) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO woman (woman_name, bio, image_url, wiki_link) VALUES (?, ?, ?, ?)",
      [woman.woman_name, woman.bio, woman.image_url, woman.wiki_link],
    );

    return result.insertId;
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM woman WHERE id = ?",
      [id],
    );

    return rows[0] as Woman | null;
  }

  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM woman");

    return rows as Woman[];
  }

  async update(id: number, woman: Omit<Woman, "id">) {
    const [result] = await databaseClient.query<Result>(
      "UPDATE woman SET woman_name = ?, bio = ?, image_url = ?, wiki_link = ? WHERE id = ?",
      [woman.woman_name, woman.bio, woman.image_url, woman.wiki_link, id],
    );

    return result.affectedRows;
  }

  async delete(id: number) {
    await databaseClient.query("DELETE FROM woman WHERE id = ?", [id]);
  }
}

export default new WomenRepository();
