import { useMemo, useState } from "react";
import { Plus, BookOpen, Heart } from "lucide-react";
import Navbar from "../components/Navbar";
import NoteCard from "../components/NoteCard";
import NoteForm from "../components/NoteForm";

const starterNotes = [
  {
    _id: "1",
    title: "JavaScript Array Filter",
    content: "filter() returns a new array containing elements that pass a condition.",
    language: "JavaScript",
    tags: ["arrays", "basics"],
    favorite: true,
  },
  {
    _id: "2",
    title: "React State",
    content: "useState lets a component store a value and update the UI when it changes.",
    language: "React",
    tags: ["hooks", "react"],
    favorite: false,
  },
  {
    _id: "3",
    title: "Express Routes",
    content: "Routes define how the server responds to HTTP methods and URL paths.",
    language: "Node.js",
    tags: ["backend", "api"],
    favorite: false,
  },
];

export default function Dashboard() {
  const [notes, setNotes] = useState(starterNotes);
  const [search, setSearch] = useState("");
  const [language, setLanguage] = useState("All");
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [editingNote, setEditingNote] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const filteredNotes = useMemo(() => {
    return notes.filter((note) => {
      const text = `${note.title} ${note.content} ${note.tags.join(" ")}`;

      return (
        text.toLowerCase().includes(search.toLowerCase()) &&
        (language === "All" || note.language === language) &&
        (!favoritesOnly || note.favorite)
      );
    });
  }, [notes, search, language, favoritesOnly]);

  function saveNote(data) {
    if (editingNote) {
      setNotes((previous) =>
        previous.map((note) =>
          note._id === editingNote._id ? { ...note, ...data } : note
        )
      );
    } else {
      setNotes((previous) => [
        {
          ...data,
          _id: crypto.randomUUID(),
          favorite: false,
        },
        ...previous,
      ]);
    }

    setEditingNote(null);
    setShowForm(false);
  }

  function deleteNote(id) {
    const confirmed = window.confirm("Delete this note?");

    if (!confirmed) return;

    setNotes((previous) => previous.filter((note) => note._id !== id));
  }

  function toggleFavorite(id) {
    setNotes((previous) =>
      previous.map((note) =>
        note._id === id
          ? { ...note, favorite: !note.favorite }
          : note
      )
    );
  }

  function startEditing(note) {
    setEditingNote(note);
    setShowForm(true);
  }

  function closeForm() {
    setEditingNote(null);
    setShowForm(false);
  }

  return (
    <div className="app-shell">
      <Navbar search={search} setSearch={setSearch} />

      <main className="dashboard">
        <section className="welcome">
          <p className="eyebrow">YOUR LEARNING SPACE</p>
          <h1>Build your knowledge, one note at a time.</h1>
          <p>Keep your programming discoveries organized in one place.</p>
        </section>

        <section className="stats">
          <article className="stat-card">
            <BookOpen />
            <span>Total notes</span>
            <strong>{notes.length}</strong>
          </article>

          <article className="stat-card">
            <Heart />
            <span>Favorites</span>
            <strong>{notes.filter((note) => note.favorite).length}</strong>
          </article>
        </section>

        <section className="section-heading">
          <div>
            <h2>Your knowledge vault</h2>
            <p>{filteredNotes.length} notes found</p>
          </div>

          <button
            className="primary-button"
            onClick={() => {
              setEditingNote(null);
              setShowForm(true);
            }}
          >
            <Plus size={18} /> New note
          </button>
        </section>

        <div className="filters">
          <label>
            Filter language
            <select
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
            >
              {["All", "JavaScript", "React", "Node.js", "Python", "CSS", "Other"].map(
                (item) => (
                  <option key={item}>{item}</option>
                )
              )}
            </select>
          </label>

          <label className="favorite-filter">
            <input
              type="checkbox"
              checked={favoritesOnly}
              onChange={(event) => setFavoritesOnly(event.target.checked)}
            />
            Favorites only
          </label>
        </div>

        {showForm && (
          <div className="form-panel">
            <NoteForm
              initialNote={editingNote}
              onSave={saveNote}
              onCancel={closeForm}
            />
          </div>
        )}

        <section className="notes-grid">
          {filteredNotes.map((note) => (
            <NoteCard
              key={note._id}
              note={note}
              onEdit={startEditing}
              onDelete={deleteNote}
              onFavorite={toggleFavorite}
            />
          ))}
        </section>

        {filteredNotes.length === 0 && (
          <div className="empty-state">
            <BookOpen size={30} />
            <h3>No matching notes</h3>
            <p>Try another search or create a new note.</p>
          </div>
        )}
      </main>

      <footer className="footer">
        Built with React · DevShelf
      </footer>
    </div>
  );
}