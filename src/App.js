import "./App.css";
import React from "react";
import Split from "react-split";
import Sidebar from "./Components/Sidebar";
import Editor from "./Components/Editor";
import { nanoid } from "nanoid";

function App() {
  const [notes, setNotes] = React.useState([]);
  const [currentNoteId, setCurrentNoteId] = React.useState(
    (notes[0] && notes[0].id) || ""
  );
  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here",
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
  }
  return (
    <main>
      {notes.length > 0 ? (
        <Split sizes={[30, 70]} direction="horizontal" className="split">
          <Sidebar />
          {currentNoteId && notes.length > 0 && <Editor />}
        </Split>
      ) : (
        <div className="no-notes">
          <h1> You have no notes</h1>
          <button className="first-note" onClick={createNewNote}>
            Create one now
          </button>
        </div>
      )}
    </main>
  );
}

export default App;
