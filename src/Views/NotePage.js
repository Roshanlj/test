import React, { useState, useEffect } from "react";

const Note = ({ id, title, description, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleClick = (e) => {
    setIsEditing((prevState) => !prevState);
    e.stopPropagation(); // prevent clicking note from selecting it in sidebar
  };

  const handleChange = (e) => {
    if (e.target.id === "title") {
      onEdit(id, e.target.value, description);
    } else if (e.target.id === "description") {
      onEdit(id, title, e.target.value);
    }
  };

  return (
    <div className="rounded-md shadow-sm p-4 bg-white mb-4">
      <div className="flex justify-between items-center mb-2">
        <input
          type="text"
          id="title"
          className={`text-[20px] font-bold w-full ${isEditing ? "bg-gray-100" : ""}`}
          value={title}
          onChange={handleChange}
          onClick={handleClick}
          readOnly={!isEditing}
        />
        <button onClick={() => onDelete(id)} className="w-7 h-7 text-red-500 bg-transparent hover:bg-gray-100 rounded-full flex items-center justify-center">
  {/* Trash icon */}
  <img src="delete.png" alt=""/>
</button>

      </div>
      <textarea
        id="description"
        className={`w-full mb-2 ${isEditing ? "bg-gray-100" : ""}`}
        style={{ height: `${Math.max(3, description.split('\n').length) * 1.5}rem` }}
        value={description}
        onChange={handleChange}
        onClick={handleClick}
      />
    </div>
  );
};

const NotePage = () => {
  // Load notes from local storage on component mount
  const initialNotes = JSON.parse(localStorage.getItem("notes")) || [
    {
      id: 1,
      title: "Important Note",
      description: "This is an important note.",
    },
    {
      id: 2,
      title: "Reminder",
      description: "Don't forget about this.",
    },
  ];

  const [notes, setNotes] = useState(initialNotes);
  const [selectedNote, setSelectedNote] = useState(null);
  const [newNote, setNewNote] = useState({ title: "", description: "" });

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    setSelectedNote(null);
  };

  const editNote = (id, editedTitle, editedDescription) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, title: editedTitle, description: editedDescription } : note
      )
    );
  };

  const addNote = () => {
    if (newNote.title.trim() === "" && newNote.description.trim() === "") {
      return;
    }

    const newNoteObject = {
      id: notes.length + 1,
      title: newNote.title,
      description: newNote.description,
    };

    setNotes((prevNotes) => [...prevNotes, newNoteObject]);
    setNewNote({ title: "", description: "" });

    // Save updated notes to local storage
    localStorage.setItem("notes", JSON.stringify([...notes, newNoteObject]));
  };

  useEffect(() => {
    // Update local storage whenever notes change
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="flex h-screen">
      {/* Sidebar (left) */}
      <div className="w-1/4 bg-gray-200 p-4">
        <h1>Notes</h1>
        <button
          className="w-full text-[#fff] text-left mb-2 p-2 rounded-md bg-[#000] hover:bg-[#5f5f5f]"
          onClick={() => setSelectedNote(null)}
        >
          Create New Note
        </button>
        {notes.map((note) => (
          <button
            key={note.id}
            className={`w-full text-left mb-2 p-2 rounded-md bg-gray-100 hover:bg-gray-200 ${
              selectedNote === note.id ? "bg-[#979797]" : ""
            }`}
            onClick={() => setSelectedNote(note.id)}
          >
            {note.title}
          </button>
        ))}
      </div>

      {/* Main Content (right) */}
      {selectedNote !== null ? (
        <div className="w-3/4 p-4">
          <Note
            key={notes.find((note) => note.id === selectedNote).id}
            id={selectedNote}
            title={notes.find((note) => note.id === selectedNote).title}
            description={notes.find((note) => note.id === selectedNote).description}
            onDelete={deleteNote}
            onEdit={editNote}
          />
        </div>
      ) : (
        <div className="w-3/4 p-4">
          <input
            type="text"
            placeholder="Title"
            className="text-[20px] font-bold w-full mb-2"
            value={newNote.title}
            onChange={(e) => setNewNote((prevNote) => ({ ...prevNote, title: e.target.value }))}
          />
          <textarea
            placeholder="Description"
            className="w-full mb-2"
            style={{ height: `${Math.max(3, newNote.description.split('\n').length) * 1.5}rem` }}
            value={newNote.description}
            onChange={(e) =>
              setNewNote((prevNote) => ({ ...prevNote, description: e.target.value }))
            }
          />
          <button
  onClick={addNote}
  className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring focus:border-blue-300"
>Add Note</button>
        </div>
      )}
    </div>
  );
};

export default NotePage;
