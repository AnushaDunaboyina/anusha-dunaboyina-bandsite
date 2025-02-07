// Define the class
class BandSiteApi {
    constructor(apiKey) {
        this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
        this.apiKey = "f2ea095f-53f5-4297-ac13-b5b99c7a7097";
    }


// Create a class method to retrieve some data
    async getShows() {
        const url = `${this.baseUrl}/showdates?api_key=${this.apiKey}`;
        // const showDatesUrl = `https://unit-2-project-api-25c1595833b2.herokuapp.com/showdates?api_key=f2ea095f-53f5-4297-ac13-b5b99c7a7097`
        
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error("Error fetching show data",error);
            return null;
        }
    }
}





// Define the class
// const API_KEY = "f2ea095f-53f5-4297-ac13-b5b99c7a7097";



