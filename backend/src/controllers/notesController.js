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

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const newNote = new Note({
      title,
      content,
    });

    await newNote.save();
    res
      .status(201)
      .json({ message: "Note created successfully!", note: newNote });
  } catch (error) {
    console.log("Error in createNote controller ", error);
    res.status(500).json({ message: "Error creating note", error });
  }
}

export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true },
    );

    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res
      .status(200)
      .json({ message: "Note updated successfully!", note: updatedNote });
  } catch (error) {
    console.log("Error in updateNote controller ", error);
    res.status(500).json({ message: "Error updating note", error });
  }
}

export const deleteNote = (req, res) => {
  res.status(200).sjon({ message: "Note deleted successfully!" });
};
