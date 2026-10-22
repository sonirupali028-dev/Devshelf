export default function NoteCard({ note, onDelete }) {
  return (
    <div className="bg-pink-200 border border-pink-300 p-5 rounded-xl shadow-md flex flex-col justify-between hover:border-pink-400 transition">
      <div>
        <h3 className="text-md font-bold text-black mb-2">{note.title}</h3>
        <p className="text-sm text-black whitespace-pre-wrap font-mono bg-pink-650 p-3 rounded-lg border border-pink-300/60">
          {note.content}
        </p>
      </div>
      <div className="mt-4 flex justify-end">
        <button
          onClick={() => onDelete(note.id)}
          className="text-xs text-red-400 hover:text-red-300 font-medium transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}