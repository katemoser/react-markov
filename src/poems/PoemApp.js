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

function PoemsApp({ poems, seeds, createNewPoem, generatePoem, newPoem }) {

  if (!poems) return "LOADING!!!!!";
  return (
    <div>
      {seeds && <PoemForm seeds={seeds} handleSave={generatePoem} />}
      {newPoem && <PoemSaveForm initialFormData={newPoem} handleSave={createNewPoem} />}
      {poems && <PoemCardList poems={poems} />}
    </div>
  );
}

export default PoemsApp;
