import React, { useState } from "react";
import MarkovApi from "../api/MarkovApi";

import PoemCardList from "./PoemCardList";
import PoemForm from "./PoemForm";
import PoemSaveForm from "./PoemSaveForm";

/** Poems app: handles poems
 *
 * props: Poems like {poems: [poem, ...]}, generatePoem
 *
 * state: none
 */

function PoemsApp({ poems, seeds }) {
  const [newPoem, setNewPoem] = useState(null);

  async function generatePoem(formData) {
    console.log("generatePoem in app.js. formData:", formData);
    let generatedPoem = await MarkovApi.generatePoem(formData);
    setNewPoem((poem) => generatedPoem);
  }

  if (!poems) return "LOADING!!!!!";
  return (
    <div>
      THIS IS THE PoemsApp
      {seeds && <PoemForm seeds={seeds} handleSave={generatePoem} />}
      {poems && <PoemCardList poems={poems} />}
      {newPoem && <PoemSaveForm newPoem={newPoem} />}
    </div>
  );
}

export default PoemsApp;
