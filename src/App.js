import "./App.css";
import React, { useEffect, useState } from "react";

import Navigation from "./routes-nav/Navigation";
import RoutesList from "./routes-nav/RoutesList";
import MarkovApi from "./api/MarkovApi";

function App() {
  const [poems, setPoems] = useState(null);
  const [seeds, setSeeds] = useState(null);
  const [newPoem, setNewPoem] = useState(null);


  useEffect(function getAllPoemsAndSeedsOnMount() {
    console.debug("PoemApp useEffect getAllPoemsAndSeedsOnMount");
    searchPoems();
    searchSeeds();
  }, []);

  async function searchPoems(searchTerm) {
    let poemsFromApi = await MarkovApi.getPoems(searchTerm);
    setPoems(poemsFromApi);
  }

  async function searchSeeds(searchTerm) {
    let seedsFromAPI = await MarkovApi.getSeeds(searchTerm);
    setSeeds(seedsFromAPI);
  }

  /**function for submitting a new seed */
  async function createNewSeed(formData) {
    console.log("createNewSeed in seedapp.js. formData=", formData);
    let newSeed = await MarkovApi.createSeed(formData);
    setSeeds((seeds) => [...seeds, newSeed]);
  }

  async function createNewPoem(formData){
    console.log("APP savePoem. formData:", formData);
    let newPoem = await MarkovApi.savePoem(formData);
    setPoems(poems => [...poems, newPoem]);
    setNewPoem(null);
  }


  async function generatePoem(formData) {
    console.log("generatePoem in app.js. formData:", formData);
    let poemText = await MarkovApi.generatePoem(formData);
    let generatedPoem = {
        seed_id: formData.seed_id,
        text: poemText,
        title: ""
    }
    setNewPoem(generatedPoem);
  }

  return (
    <div className="App">
      <Navigation />
      <RoutesList 
        poems={poems} 
        seeds={seeds} 
        createNewSeed={createNewSeed}
        createNewPoem={createNewPoem}
        generatePoem={generatePoem}
        newPoem={newPoem}
/>
    </div>
  );
}

export default App;
