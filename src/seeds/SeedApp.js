import SeedCardList from "./SeedCardList";
import React, {useState, useEffect} from "react";
import SeedForm from "./SeedForm";


/** Seed app: handles Seeds
 * 
 * props: seeds like {seeds: [seed, ...]}
 * 
 * state: none
 */

function SeedApp({seeds, createNewSeed}){

    if(!seeds) return "LOADING!!!!!";
    return (
        <div>
            THIS IS THE SeedApp
            <SeedForm 
                handleSave={createNewSeed}/>
            <SeedCardList seeds={seeds}/>
        </div>
    )
}

export default SeedApp