import React from "react";
import {Routes, Route} from "react-router-dom";
import Homepage from "../home/Homepage";
import PoemApp from "../poems/PoemApp";
import SeedApp from "../seeds/SeedApp";

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