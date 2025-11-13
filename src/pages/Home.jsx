import React from "react";
import ChallengeList from "../components/ChallengeList/ChallengeList";

function Home({ state, dispatch }) {
  return (
    <section>
      <h2>Mis Retos</h2>
      <ChallengeList challenges={state.challenges} dispatch={dispatch} favorites={state.favorites}/>
    </section>
  );
}

export default Home;