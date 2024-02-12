import React from "react";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import Split from "react-split";
import { addDoc, deleteDoc, doc, onSnapshot, setDoc } from "firebase/firestore";
import { db, notesCollection } from "./firebase";
import "./App.css";

export default function App() {
    const [notes, setNotes] = React.useState([]);

    const [currentNoteId, setCurrentNoteId] = React.useState("");

    const currentNote =
        notes.find((note) => note.id === currentNoteId) ?? notes[0];

    const sortedNotes = notes.sort((a, b) => b.updateAt - a.updateAt);

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

    React.useEffect(() => {
        if (!currentNoteId) {
            setCurrentNoteId(notes[0]?.id);
        }
    }, [notes]);

    async function createNewNote() {
        const now = Date.now();

        const newNote = {
            body: "# Type your markdown note's title here",
            createdAt: now,
            updateAt: now,
        };
        const newNoteRef = await addDoc(notesCollection, newNote);
        setCurrentNoteId(newNoteRef.id);
    }

    async function updateNote(text) {
        const docRef = doc(db, "notes", currentNoteId);
        await setDoc(
            docRef,
            { body: text, updateAt: Date.now() },
            { merge: true }
        );
    }

    async function deleteNote(noteId) {
        const docRef = doc(db, "notes", noteId);
        await deleteDoc(docRef);
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
                        notes={sortedNotes}
                        currentNote={currentNote}
                        setCurrentNoteId={setCurrentNoteId}
                        newNote={createNewNote}
                        deleteNote={deleteNote}
                    />

                    <Editor currentNote={currentNote} updateNote={updateNote} />
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
