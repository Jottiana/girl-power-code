import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

import gamesActions from "./modules/games/gamesActions";
import womenActions from "./modules/women/womenActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

router.get("/api/games", gamesActions.browse);
router.get("/api/games/:id", gamesActions.read);
router.post("/api/games", gamesActions.add);
router.put("/api/games/:id", gamesActions.edit);
router.delete("/api/games/:id", gamesActions.delete);

router.get("/api/women", womenActions.browse);
router.get("/api/women/:id", womenActions.read);
router.post("/api/women", womenActions.add);
router.put("/api/women/:id", womenActions.edit);
router.delete("/api/women/:id", womenActions.delete);

/* ************************************************************************* */

export default router;
