import React from "react";
import Favorites from "../components/Favorites/Favorite";

function FavoritesPage({ state, dispatch }) {
  return (
    <section>
      <h2>Favoritos</h2>
      <Favorites
        favorites={state.favorites}
        challenges={state.challenges}
        dispatch={dispatch}
      />
    </section>
  );
}

export default FavoritesPage;