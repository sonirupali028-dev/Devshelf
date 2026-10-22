import { useState } from 'react';
import NoteForm from '../components/NoteForm';
import NoteCard from '../components/NoteCard';

export default function Dashboard() {
  const [notes, setNotes] = useState([
    { id: 1, title: 'Welcome to Devshelf', content: 'Store your code snippets and developer notes here!' }
  ]);

  const handleAddNote = (newNote) => {
    setNotes([newNote, ...notes]);
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-black mb-6">Your Developer Dashboard</h1>
      <NoteForm onAddNote={handleAddNote} />
      
      <h2 className="text-lg font-semibold mb-4 text-black">Saved Notes</h2>
      {notes.length === 0 ? (
        <p className="text-black text-sm">No notes yet. Create one above!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {notes.map(note => (
            <NoteCard key={note.id} note={note} onDelete={handleDeleteNote} />
          ))}
        </div>
      )}
    </div>
  );
}