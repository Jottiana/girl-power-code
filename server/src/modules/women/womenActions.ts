import type { RequestHandler } from "express";
import womenRepository from "./womenRepository";

// BREAD - Browse (Read All)
const browse: RequestHandler = async (req, res, next) => {
  try {
    const women = await womenRepository.readAll();
    res.json(women);
  } catch (err) {
    next(err);
  }
};

// BREAD - Read (Read One)
const read: RequestHandler = async (req, res, next) => {
  try {
    const womanId = Number(req.params.id);
    const woman = await womenRepository.read(womanId);

    if (!woman) {
      res.sendStatus(404);
    } else {
      res.json(woman);
    }
  } catch (err) {
    next(err);
  }
};

// BREAD - Edit (Update)
const edit: RequestHandler = async (req, res, next) => {
  try {
    const womanId = Number(req.params.id);
    const { woman_name, bio, image_url, wiki_link } = req.body;

    if (!woman_name || !bio) {
      res.status(400).json({ error: "Le nom et la bio sont requis" });
      return;
    }

    const updatedRows = await womenRepository.update(womanId, {
      woman_name,
      bio,
      image_url,
      wiki_link,
    });

    if (updatedRows === 0) {
      res.status(404).json({ message: "Personne non trouvée" });
      return;
    }

    res.status(200).json({ message: "Personne mise à jour avec succès" });
    return;
  } catch (err) {
    next(err);
    return;
  }
};

// BREAD - Add (Create)
const add: RequestHandler = async (req, res, next) => {
  try {
    const newWoman = {
      woman_name: req.body.woman_name,
      bio: req.body.bio,
      image_url: req.body.image_url,
      wiki_link: req.body.wiki_link,
    };

    const insertId = await womenRepository.create(newWoman);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

// BREAD - Delete
const deleteWoman: RequestHandler = async (req, res, next) => {
  try {
    const womanId = Number(req.params.id);
    await womenRepository.delete(womanId);
    res.status(200).json({ message: "Personne supprimée" });
  } catch (err) {
    next(err);
  }
};

export default { browse, read, edit, add, delete: deleteWoman };
