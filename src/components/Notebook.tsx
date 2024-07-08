import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../redux/slices/notesSlice";
import { AppDispatch } from "../redux/store";
import TextArea from "./ui/TextArea/TextArea";
import Button from "./ui/Button/Button";
import NoteList from "./NoteList/NoteList";

const NoteBook = () => {
  const [note, setNote] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleNoteChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNote(event.target.value);
  };

  const handleAddNote = () => {
    if (note.trim() !== "") {
      dispatch(addNote(note));
      setNote("");
    }
  };

  return (
    <div>
      <TextArea
        value={note}
        label="Enter your note or comment:"
        onChange={handleNoteChange}
        id="note"
        placeholder="Type your note here..."
      />
      <Button onClick={handleAddNote} disabled={!note} className="mt-4">
        Add Note
      </Button>
      <NoteList />
    </div>
  );
};

export default NoteBook;
