import { motion } from "framer-motion";
import { toggleVisibility } from "../animation/visibility";
import { deleteNote } from "../api/axios";

type NotesProps = {
  note: any;
  setUpdateNotes: any;
  updateNotes: any;
};

const Notes = ({ note, setUpdateNotes, updateNotes }: NotesProps) => {
  function handleDeleteNote(id: any) {
    toggleVisibility(id);
    setTimeout(() => {
      deleteNote(id);
      setUpdateNotes(updateNotes + 1);
    }, 300);
  }

  return (    
      <motion.div
        className="note alert alert-light border border-dark-subtle m-auto mb-3"
        data-aos="zoom-in-up"
        id={`note${note.id}`}
        exit={{ x: -100, opacity: 0 }}
      >
        <div
          className="heading d-flex justify-content-between mb-2"
          style={{ alignItems: "center" }}
        >
          <h4>{note.title}</h4>
          <button
            className="btn"
            style={{ fontSize: 22 }}
            onClick={(e) => handleDeleteNote(note.id)}
          >
            X
          </button>
        </div>
        <p>{note.description}</p>
        <span className="date w-100 d-flex justify-content-end px-4">
          {note.date.slice(0, 10).replace(new RegExp("-", "g"), "/")}
        </span>
      </motion.div>
  );
};

export default Notes;
