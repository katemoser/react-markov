import "./App.css";
import React, { useEffect, useState } from "react";

import Navigation from "./routes-nav/Navigation";
import RoutesList from "./routes-nav/RoutesList";
import MarkovApi from "./api/MarkovApi";

function App() {
  const [poems, setPoems] = useState(null);
  const [seeds, setSeeds] = useState(null);

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

  return (
    <div className="App">
      <Navigation />
      <RoutesList 
        poems={poems} 
        seeds={seeds} 
        createNewSeed={createNewSeed}
/>
    </div>
  );
}

export default App;
