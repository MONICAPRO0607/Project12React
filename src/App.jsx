// import React, { useReducer } from "react";
// import ChallengeForm from "./components/ChallengeForm/ChallengeForm";
// import ChallengeList from "./components/ChallengeList/ChallengeList";
// import Favorites from "./components/Favorites/Favorite";
// import "./App.css";

// const initialState = {
//   challenges: [],
//   favorites: [],
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "ADD_CHALLENGE":
//       return { ...state, challenges: [...state.challenges, { ...action.payload, progress: 0 }],};
//     case "TOGGLE_FAVORITE":
//       return state.favorites.includes(action.payload)
//         ? { ...state, favorites: state.favorites.filter(id => id !== action.payload) }
//         : { ...state, favorites: [...state.favorites, action.payload] };
//     case "UPDATE_PROGRESS":
//       return {
//         ...state,
//         challenges: state.challenges.map(ch =>
//           ch.id === action.payload.id ? { ...ch, progress: action.payload.progress } : ch
//         ),
//       };
//     case "DELETE_CHALLENGE":
//       return {
//         ...state,
//         challenges: state.challenges.filter(ch => ch.id !== action.payload),
//         favorites: state.favorites.filter(id => id !== action.payload),
//       };
//     default:
//       return state;
//   }
// }

// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div className="app-container">
//       <nav>
//         <a href="#form">Crear Reto</a>
//         <a href="#retos">Mis Retos</a>
//         <a href="#favoritos">Favoritos</a>
//       </nav>

//       <section id="form">
//         <ChallengeForm dispatch={dispatch} />
//       </section>

//       <section id="retos">
//         <h2>Mis Retos</h2>
//         <ChallengeList challenges={state.challenges}  favorites={state.favorites} dispatch={dispatch} />
//       </section>

//       <section id="favoritos">
//         <h2>Favoritos</h2>
//         <Favorites favorites={state.favorites} challenges={state.challenges} dispatch={dispatch} />
//       </section>
//     </div>
//   );
// }

import React, { useReducer, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { challengeReducer, initialState } from "./reducers/challenge.reducer";
import {
  ADD_CHALLENGE,
  TOGGLE_FAVORITE,
  UPDATE_PROGRESS,
  RESET_PROGRESS,
  DELETE_CHALLENGE,
  LOAD_FROM_STORAGE,
} from "./reducers/challenge.actions";

import CreateChallengePage from "./pages/CreateChallengePage";
import Home from "./pages/Home";
import FavoritesPage from "./pages/FavoritePage";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(challengeReducer, initialState);

  useEffect(() => {
    const storedData = localStorage.getItem("challengeState");
    if (storedData) {
      dispatch({ type: LOAD_FROM_STORAGE, payload: JSON.parse(storedData) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("challengeState", JSON.stringify(state));
  }, [state]);

  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <Link to="/">Mis Retos</Link>
          <Link to="/crear">Crear Reto</Link>
          <Link to="/favoritos">Favoritos</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home state={state} dispatch={dispatch} />} />
          <Route
            path="/crear"
            element={<CreateChallengePage dispatch={dispatch} />}
          />
          <Route
            path="/favoritos"
            element={<FavoritesPage state={state} dispatch={dispatch} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;