import axios from "axios";

const BASE_URL = process.env.API_BASE_URL || "http://localhost:5000";

/** functions for making AJAX requests to markov flask API
 * 
 */
class MarkovApi {

    /** Returns a list of poems [poem, ...]
     * like {id, text, seed_id, submitted_by_user_id, submitted_at} 
     */
  static async getPoems() {
    let response = await axios.get(`${BASE_URL}/poems`);
    console.log("MARKOVAPI, getPoems, response:", response);
    return response.data.poems;
  }

  /** Returns a list of seeds [seed, ...]
   * like {id, text, title, author, submitted_by_user_id, submitted_at}
   */
  static async getSeeds() {
    let response = await axios.get(`${BASE_URL}/seeds`);
    console.log("MARKOVAPI, getSeeds, response:", response);
    return response.data.seeds;
  }

  /** Takes formData like 
   * 
   */

  static async createSeed(formData) {
    let response = await axios.post(`${BASE_URL}/seeds`, formData);
    console.log("MarkovAPI, createseed, reponse:", response);
    return response.data.seed;
  }

  static async generatePoem(formData) {
    console.log("Generate poem formData:", formData);
    let response = await axios.get(
      `${BASE_URL}/seeds/${formData.seed_id}/generate`,
      formData
    );
    console.log("MarkovAPI, generatePoem, reponse:", response);
    return response.data;
  }

  static async savePoem(formData) {
    console.log("MARKOVAPI, savePoem. formData:", formData);
    let response = await axios.post(`${BASE_URL}/poems`, formData);
    return response.data.poem;
  }
}

export default MarkovApi;
