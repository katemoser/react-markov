import axios from "axios";
import {v4 as uuid4} from "uuid";

const BASE_URL = process.env.API_BASE_URL || "http://localhost:5000"
class MarkovApi {



    static async getPoems(){
        let response = await axios.get(`${BASE_URL}/poems`);
        console.log("MARKOVAPI, getPoems, response:", response);
        return response.data.poems;
    
    }
    static async getSeeds(){
        let response = await axios.get(`${BASE_URL}/seeds`);
        console.log("MARKOVAPI, getSeeds, response:", response);
        return response.data.seeds;
    }

    static async createSeed(formData){
        const data = { ...formData, id: uuid4()}
        let response = await axios.post(`${BASE_URL}/seeds`, data)
        console.log("MarkovAPI, createseed, reponse:", response)
        return response.data.seed;
    }
}

export default MarkovApi;