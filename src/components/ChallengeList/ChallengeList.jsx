import React from "react";
import ChallengeCard from "../ChallengeCard/ChallengeCard";
import "./ChallengeList.css";

function ChallengeList({ challenges = [], dispatch, favorites = [] }) {
  if (!Array.isArray(challenges) || challenges.length === 0)
    return <p>No hay retos creados aún.</p>;

  return (
    <div className="challenge-list">
      {challenges.map((ch) => (
        <ChallengeCard
          key={ch.id}
          challenge={ch}
          dispatch={dispatch}
          isFavorite={Array.isArray(favorites) && favorites.includes(ch.id)}
        />
      ))}
    </div>
  );
}

export default ChallengeList;