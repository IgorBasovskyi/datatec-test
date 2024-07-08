import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

const NoteList = () => {
  const notes = useSelector((state: RootState) => state.notes.notes);

  return (
    <div className="mt-4">
      <h3>All Notes:</h3>
      <ul className="list-disc pl-5">
        {notes.map((note, index) => (
          <li key={note + index}>{note}</li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
