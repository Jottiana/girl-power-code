import type { RequestHandler } from "express";
import gamesRepository from "./gamesRepository";

// BREAD - Browse (Read All)
const browse: RequestHandler = async (req, res, next) => {
  try {
    const games = await gamesRepository.readAll();
    res.json(games);
  } catch (err) {
    next(err);
  }
};

// BREAD - Read (Read One)
const read: RequestHandler = async (req, res, next) => {
  try {
    const gameId = Number(req.params.id);
    const game = await gamesRepository.read(gameId);

    if (!game) {
      res.sendStatus(404);
    } else {
      res.json(game);
    }
  } catch (err) {
    next(err);
  }
};

// BREAD - Add (Create)
const add: RequestHandler = async (req, res, next) => {
  try {
    const newGame = {
      title: req.body.title,
      game_description: req.body.game_description,
      game_url: req.body.game_url,
    };

    const insertId = await gamesRepository.create(newGame);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

// BREAD - Edit (Update)
const edit: RequestHandler = async (req, res, next) => {
  try {
    const gameId = Number(req.params.id);
    const { title, game_description, game_url } = req.body;

    if (!title || !game_description) {
      res.status(400).json({ error: "Le titre et la description sont requis" });
      return;
    }

    const updatedRows = await gamesRepository.update(gameId, {
      title,
      game_description,
      game_url,
    });

    if (updatedRows === 0) {
      res.status(404).json({ message: "Jeu non trouvé" });
      return;
    }

    res.status(200).json({ message: "Jeu mis à jour avec succès" });
    return;
  } catch (err) {
    next(err);
    return;
  }
};

// BREAD - Delete
const deleteGame: RequestHandler = async (req, res, next) => {
  try {
    const gameId = Number(req.params.id);
    await gamesRepository.delete(gameId);
    res.status(200).json({ message: "Jeu supprimé" });
  } catch (err) {
    next(err);
  }
};

export default { browse, read, edit, add, delete: deleteGame };
