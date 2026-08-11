import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.log("Error in getAllNotes controller ", error);
    res.status(500).json({ message: "Error retrieving notes", error });
  }
}

export const createNote = (req, res) => {
  res.status(201).json({ message: "Note created successfully!" });
};

export const updateNote = (req, res) => {
  res.status(200).json({ message: "Note updated successfully!" });
};

export const deleteNote = (req, res) => {
  res.status(200).sjon({ message: "Note deleted successfully!" });
};
