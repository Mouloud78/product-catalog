import express from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  updateNote,
} from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);

router.post("/", createNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

export default router;

//mouloudouldali78_db_user

//fnuVika78WNKC3O9

//mongodb+srv://mouloudouldali78_db_user:fnuVika78WNKC3O9@cluster0.gqpauna.mongodb.net/?appName=Cluster0
