import { useEffect, useState } from "react";

const emptyForm = {
  title: "",
  content: "",
  language: "JavaScript",
  tags: "",
};

export default function NoteForm({ initialNote, onSave, onCancel }) {
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    if (initialNote) {
      setForm({
        title: initialNote.title,
        content: initialNote.content,
        language: initialNote.language,
        tags: (initialNote.tags || []).join(", "),
      });
    } else {
      setForm(emptyForm);
    }
  }, [initialNote]);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.title.trim() || !form.content.trim()) {
      return;
    }

    onSave({
      title: form.title.trim(),
      content: form.content.trim(),
      language: form.language,
      tags: form.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
    });
  }

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <h2>{initialNote ? "Edit note" : "Create a note"}</h2>

      <label>
        Title
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="e.g. React useState"
          required
        />
      </label>

      <label>
        Programming language
        <select
          name="language"
          value={form.language}
          onChange={handleChange}
        >
          {["JavaScript", "React", "Node.js", "Python", "CSS", "Other"].map(
            (language) => (
              <option key={language}>{language}</option>
            )
          )}
        </select>
      </label>

      <label>
        Explanation or code snippet
        <textarea
          name="content"
          value={form.content}
          onChange={handleChange}
          placeholder="Write what you learned..."
          rows={5}
          required
        />
      </label>

      <label>
        Tags (comma-separated)
        <input
          name="tags"
          value={form.tags}
          onChange={handleChange}
          placeholder="hooks, beginner, revision"
        />
      </label>

      <div className="form-actions">
        <button className="primary-button" type="submit">
          Save note
        </button>
        <button className="secondary-button" type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}