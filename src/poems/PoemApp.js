import React, { useState } from "react";
import MarkovApi from "../api/MarkovApi";

import PoemCardList from "./PoemCardList";
import PoemForm from "./PoemForm";
import PoemSaveForm from "./PoemSaveForm";

/** Poems app: handles poems
 *
 *  props: 
 *    poems like [poem, ... ]   
 *      where poem is like {id, seed_id, text, submitted_by_user_id, submitted_at }
 * 
 *    seeds like [seed, ... ]
 *      where seed is like: {id, text, title, author, submitted_by_user_id, submitted_at}
 * 
 *    new poem like {text, seed_id}
 * 
 *    createNewPoem (function to add new poem)
 *    generatePoem (function to generate new poem using markov chain)
 *
 *  state: none
 * 
 *  RoutesList -> PoemApp -> PoemForm
 *                        -> PoemSaveForm
 *                        -> PoemCardList
 */

function PoemsApp({ poems, seeds, createNewPoem, generatePoem, newPoem }) {

  if (!poems) return "LOADING!!!!!";
  return (
    <div>
      {seeds && <PoemForm seeds={seeds} handleSave={generatePoem} />}
      {newPoem && <PoemSaveForm newPoem={newPoem} handleSave={createNewPoem} />}
      {poems && <PoemCardList poems={poems} />}
    </div>
  );
}

export default PoemsApp;
