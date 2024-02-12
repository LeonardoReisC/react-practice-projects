import React from "react";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import Split from "react-split";
import { nanoid } from "nanoid";
import { addDoc, onSnapshot } from "firebase/firestore";
import { notesCollection } from "./firebase";
import "./App.css";

export default function App() {
    const [notes, setNotes] = React.useState(
        () => JSON.parse(localStorage.getItem("notes")) ?? []
    );

    const [currentNoteId, setCurrentNoteId] = React.useState(
        notes[0]?.id || ""
    );

    const currentNote =
        notes.find((note) => note.id === currentNoteId) ?? notes[0];

    React.useEffect(() => {
        const unsubscribe = onSnapshot(notesCollection, (snapshot) => {
            const notesArray = snapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            setNotes(notesArray);
        });

        return unsubscribe;
    }, []);

    async function createNewNote() {
        const newNote = {
            body: "# Type your markdown note's title here",
        };
        setNotes((prevNotes) => [newNote, ...prevNotes]);
        setCurrentNoteId(newNote.id);
    }

    function updateNote(text) {
        const [curr] = notes.filter((note) => note.id === currentNoteId);
        setNotes((oldNotes) => [
            { ...curr, body: text },
            ...oldNotes.filter((note) => note.id !== currentNoteId),
        ]);
    }

    function deleteNote(event, noteId) {
        event.preventDefault();
        setNotes((oldNotes) => [
            ...oldNotes.filter((note) => note.id !== noteId),
        ]);
    }

    return (
        <main>
            {notes.length > 0 ? (
                <Split
                    sizes={[30, 70]}
                    direction="horizontal"
                    className="split"
                >
                    <Sidebar
                        notes={notes}
                        currentNote={currentNote}
                        setCurrentNoteId={setCurrentNoteId}
                        newNote={createNewNote}
                        deleteNote={deleteNote}
                    />
                    {currentNoteId && notes.length > 0 && (
                        <Editor
                            currentNote={currentNote}
                            updateNote={updateNote}
                        />
                    )}
                </Split>
            ) : (
                <div className="no-notes">
                    <h1>You have no notes</h1>
                    <button className="first-note" onClick={createNewNote}>
                        Create one now
                    </button>
                </div>
            )}
        </main>
    );
}
