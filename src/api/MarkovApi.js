import axios from "axios";

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
        let response = await axios.post(`${BASE_URL}/seeds`, formData);
        console.log("MarkovAPI, createseed, reponse:", response);
        return response.data.seed;
    }

    static async generatePoem(formData){
        console.log("Generate poem formData:", formData)
        let response = await axios.get(
            `${BASE_URL}/seeds/${formData.seed_id}/generate`,
             formData
        );
        console.log("MarkovAPI, generatePoem, reponse:", response);
        return response.data;
    }
}

export default MarkovApi;