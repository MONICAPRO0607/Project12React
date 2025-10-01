import React, { useReducer } from "react";
import ChallengeForm from "./components/ChallengeForm/ChallengeForm";
import ChallengeList from "./components/ChallengeList/ChallengeList";
import Favorites from "./components/Favorites/Favorite";
import "./App.css";

const initialState = {
  challenges: [],
  favorites: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_CHALLENGE":
      return { ...state, challenges: [...state.challenges, { ...action.payload, progress: 0 }],};
    case "TOGGLE_FAVORITE":
      return state.favorites.includes(action.payload)
        ? { ...state, favorites: state.favorites.filter(id => id !== action.payload) }
        : { ...state, favorites: [...state.favorites, action.payload] };
    case "UPDATE_PROGRESS":
      return {
        ...state,
        challenges: state.challenges.map(ch =>
          ch.id === action.payload.id ? { ...ch, progress: action.payload.progress } : ch
        ),
      };
    case "DELETE_CHALLENGE":
      return {
        ...state,
        challenges: state.challenges.filter(ch => ch.id !== action.payload),
        favorites: state.favorites.filter(id => id !== action.payload),
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="app-container">
      <nav>
        <a href="#form">Crear Reto</a>
        <a href="#retos">Mis Retos</a>
        <a href="#favoritos">Favoritos</a>
      </nav>

      <section id="form">
        <ChallengeForm dispatch={dispatch} />
      </section>

      <section id="retos">
        <h2>Mis Retos</h2>
        <ChallengeList challenges={state.challenges}  favorites={state.favorites} dispatch={dispatch} />
      </section>

      <section id="favoritos">
        <h2>Favoritos</h2>
        <Favorites favorites={state.favorites} challenges={state.challenges} dispatch={dispatch} />
      </section>
    </div>
  );
}

export default App;