import React, {useState, useEffect} from "react";
import MarkovApi from "../api/MarkovApi";

import PoemCardList from "./PoemCardList"


/** Poems app: handles poems
 * 
 * props: none
 * 
 * state: poems like {poems: [poem, ...}
 */


 function PoemsApp(){
    
    const[poems, setPoems] = useState(null);

    useEffect(function getAllPoemsOnMount(){
        console.debug("PoemApp useEffect getAllPoemsOnMount")
        search()
    }, [])

    async function search(searchTerm){
        let poemsFromApi = await MarkovApi.getPoems(searchTerm);
        setPoems(poemsFromApi);
    }

    if(!poems) return "LOADING!!!!!";
    return (
        <div>
            THIS IS THE PoemsApp
            {poems && 
            <PoemCardList poems={poems}/>
            }
        </div>
    )
}

export default PoemsApp