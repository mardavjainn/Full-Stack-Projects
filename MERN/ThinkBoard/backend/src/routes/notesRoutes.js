import express from "express";
import rateLimiter from "../middleware/rateLimiter.js";
import { getAllNotes,getNoteById, createNote, updateNote, deleteNote } from "../controllers/notescontroller.js";

const router = express.Router();

router.use(rateLimiter);

router.get("/", getAllNotes);
router.get("/:id", getNoteById);

router.post("/", createNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

export default router;