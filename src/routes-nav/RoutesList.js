import React from "react";
import {Routes, Route} from "react-router-dom";
import Homepage from "../home/Homepage";
import PoemApp from "../poems/PoemApp";
import SeedApp from "../seeds/SeedApp";


/** Routelist: handles client-side routing
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
 *    createNewSeed (function add new seed)
 *    createNewPoem (function to add new poem)
 *    generatePoem (function to generate new poem using markov chain)
 * 
 *  state: none
 * 
 * App -> RoutesList -> Homepage
 *                   -> PoemApp
 *                   -> SeedApp
 */
function RoutesList({seeds, poems, createNewSeed, createNewPoem, generatePoem, newPoem}){

    return (
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/poems" element={
                    <PoemApp 
                        poems={poems} 
                        seeds={seeds} 
                        createNewPoem={createNewPoem}
                        generatePoem={generatePoem}
                        newPoem={newPoem}/>}/>
                <Route path="/seeds" element={
                    <SeedApp seeds={seeds} createNewSeed={createNewSeed}/>} />
            </Routes>

    )
}

export default RoutesList;