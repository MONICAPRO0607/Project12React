import React from "react";
import ChallengeCard from "../ChallengeCard/ChallengeCard";
import "./Favorite.css";

function Favorites({ favorites, challenges, dispatch }) {
  const favChallenges = challenges.filter((ch) => favorites.includes(ch.id));

  if (favChallenges.length === 0) return <p>No tienes retos favoritos aún.</p>;

  return (
    <div className="favorites-list">
      {favChallenges.map((ch) => (
        <ChallengeCard key={ch.id} challenge={ch} dispatch={dispatch} isFavorite={true}/>
      ))}
    </div>
  );
}

export default Favorites;