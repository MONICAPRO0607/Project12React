import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./ChallengeCard.css";

const categoryIcons = {
  "🎨 Creatividad": "🎨",
  "💪 Salud": "💪",
  "📚 Estudio": "📚",
  "🌱 Desarrollo personal": "🌱",
};

function ChallengeCard({ challenge, dispatch, isFavorite }) {
  const toggleFavorite = () => {
    dispatch({ type: "TOGGLE_FAVORITE", payload: challenge.id });
  };

  const increaseProgress = () => {
    const newProgress = Math.min(challenge.progress + 10, 100);
    dispatch({ type: "UPDATE_PROGRESS", payload: { id: challenge.id, progress: newProgress } });
  };

  const resetProgress = () => {
    dispatch({ type: "UPDATE_PROGRESS", payload: { id: challenge.id, progress: 0 } });
  };

  const deleteChallenge = () => {
    dispatch({ type: "DELETE_CHALLENGE", payload: challenge.id });
  };

  return (
    <div className="challenge-card">
      <h3>{challenge.title}</h3>
      <p>{challenge.description}</p>
      <p><strong>Categoría:</strong> {challenge.category}</p>
      <p><strong>Dificultad:</strong> {challenge.difficulty}</p>

      <ProgressBar progress={challenge.progress} />

      <div className="challenge-actions">
        <button onClick={increaseProgress}>+10%</button>
        <button onClick={resetProgress}>🔄 Reiniciar</button>
        <button onClick={toggleFavorite}>{isFavorite ? "💔 Quitar" : "❤️ Favorito"}</button>
        <button onClick={deleteChallenge} className="delete-btn">🗑 Eliminar</button>
      </div>
    </div>
  );
}

export default ChallengeCard;