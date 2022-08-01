import SeedCardList from "./SeedCardList";
import React, {useState, useEffect} from "react";
import SeedForm from "./SeedForm";


/** Seed app: handles Seeds
 * 
 * props: 
 *  seeds like [seed, ...]
 *      with seed like {id, text, title, author, submitted_by_user_id, submitted_at}
 *  createNewSeed ()
 * 
 * state: none
 * 
 * RoutesList -> SeedApp -> SeedForm
 *                       -> SeedCardList
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