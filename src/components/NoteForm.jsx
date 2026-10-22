import { useState } from 'react';

export default function NoteForm({ onAddNote }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    
    onAddNote({ id: Date.now(), title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-rose-50 border border-rose-100 p-6 rounded-xl shadow-lg mb-8">
      <h2 className="text-lg font-semibold mb-4 text-black">Create a New Snippet / Note</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-xs font-medium text-black mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., React Hooks Cheat Sheet"
            className="w-full bg-white border border-pink-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-black mb-1">Content / Code Snippet</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your note or code here..."
            rows="3"
            className="w-full bg-white border border-pink-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-black font-mono"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black hover:bg-white text-white hover:text-black font-medium py-2 rounded-lg transition text-sm shadow-md"
        >
          Add Note
        </button>
      </div>
    </form>
  );
}