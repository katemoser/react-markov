import SeedCardList from "./SeedCardList";
import React, {useState, useEffect} from "react";
import axios from "axios";
import MarkovApi from "../api/MarkovApi";
import { useSearchParams } from "react-router-dom";
import SeedForm from "./SeedForm";


/** Seed app: handles Seeds
 * 
 * props: none
 * 
 * state: seeds
 */

function SeedApp(){
    const [seeds, setSeeds] = useState(null);
    console.log("SeedApp, seeds = ", seeds);

    useEffect(function getAllSeedsOnMount(){
        console.debug("seedapp, useeffect getallseedsonmount")
        search();
    }, [])

    async function search(searchTerm){
        let seedsFromAPI = await MarkovApi.getSeeds(searchTerm);
        setSeeds(seedsFromAPI);
    }


    const initialFormData = {
        title:"",
        author:"",
        text:""
    }

    /**function for submitting a new seed */
    async function createNewSeed(formData){
        console.log("createNewSeed in seedapp.js. formData=", formData);
        let newSeed = await MarkovApi.createSeed(formData);
        setSeeds(seeds => ([...seeds, newSeed]))
    }

    if(!seeds) return "LOADING!!!!!";
    return (
        <div>
            THIS IS THE SeedApp
            <SeedForm 
                initialFormData={initialFormData} 
                handleSave={createNewSeed}/>
            <SeedCardList seeds={seeds}/>
        </div>
    )
}

export default SeedApp