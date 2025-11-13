import React from "react";
import ChallengeForm from "../components/ChallengeForm/ChallengeForm";

function CreateChallengePage({ dispatch }) {
  return (
    <section>
      <ChallengeForm dispatch={dispatch} />
    </section>
  );
}

export default CreateChallengePage;