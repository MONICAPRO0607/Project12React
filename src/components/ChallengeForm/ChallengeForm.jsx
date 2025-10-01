import React, { useState } from "react";
import useChallengeForm from "../../hooks/useChallengeForm";
import "./ChallengeForm.css";

export default function ChallengeForm({ dispatch }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "Creatividad",
    difficulty: 1,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    dispatch({
      type: "ADD_CHALLENGE",
      payload: { ...form, id: Date.now() },
    });
    setForm({ title: "", description: "", category: "Creatividad", difficulty: 1 });
  };

  return (
    <div className="form-container">
      <h2>Crear reto</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre del reto</label>
        <input
          type="text"
          name="title"
          placeholder="Ej. 30 días de dibujo"
          value={form.title}
          onChange={handleChange}
        />

        <label>Descripción</label>
        <textarea
          name="description"
          placeholder="Describe tu reto..."
          value={form.description}
          onChange={handleChange}
        />

        <label>Categoría</label>
        <select name="category" value={form.category} onChange={handleChange}>
          <option>🎨 Creatividad</option>
          <option>💪 Salud</option>
          <option>📚 Estudio</option>
          <option>🌱 Desarrollo personal</option>
        </select>

        <label>Dificultad</label>
        <input
          type="range"
          min="1"
          max="5"
          name="difficulty"
          value={form.difficulty}
          onChange={handleChange}
          className="difficulty-range"
        />
        <div className="difficulty-labels">
          <span>Fácil</span>
          <span>Medio</span>
          <span>Difícil</span>
        </div>

        <button type="submit">Añadir reto</button>
      </form>
    </div>
  );
}