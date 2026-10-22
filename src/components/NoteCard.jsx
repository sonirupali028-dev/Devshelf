import { Heart, Pencil, Trash2 } from "lucide-react";

export default function NoteCard({
  note,
  onEdit,
  onDelete,
  onFavorite,
}) {
  return (
    <article className="note-card">
      <div className="note-top">
        <span className="tag">{note.language}</span>

        <button
          className="icon-button"
          aria-label="Toggle favorite"
          onClick={() => onFavorite(note._id)}
        >
          <Heart
            size={19}
            fill={note.favorite ? "currentColor" : "none"}
          />
        </button>
      </div>

      <h3>{note.title}</h3>
      <p className="note-content">{note.content}</p>

      <div className="note-tags">
        {(note.tags || []).map((tag) => (
          <span key={tag} className="small-tag">
            #{tag}
          </span>
        ))}
      </div>

      <div className="note-actions">
        <button onClick={() => onEdit(note)}>
          <Pencil size={15} /> Edit
        </button>

        <button
          className="delete-action"
          onClick={() => onDelete(note._id)}
        >
          <Trash2 size={15} /> Delete
        </button>
      </div>
    </article>
  );
}