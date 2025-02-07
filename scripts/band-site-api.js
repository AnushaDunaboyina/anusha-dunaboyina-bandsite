// Define the class
class BandSiteApi {
    constructor(apiKey) {
        this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
        this.apiKey = apiKey;
    }
}

// Create a class method to retrieve some data
async getShows() {
    const url = `${this.baseUrl}/showdates?apiKey=${this.apiKey}`;
    
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}