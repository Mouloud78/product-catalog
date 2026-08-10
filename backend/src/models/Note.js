import mongoose from "mongoose";

//1- Create a schema for the Note model
const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  },
);

//2- Create the Note model using the schema
const Note = mongoose.model("Note", noteSchema);

export default Note;
