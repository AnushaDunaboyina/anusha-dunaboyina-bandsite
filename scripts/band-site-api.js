// Define the class

class BandSiteApi {
  constructor(apiKey) {
    this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
    this.apiKey = apiKey;
  }

  // Create a class method to retrieve shows data from the API

  async getShows() {
    const url = `${this.baseUrl}/showdates?api_key=${this.apiKey}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error("Error fetching show data", error);
    }
  }

  // create a class method to retrieve comments from the API

  async getComments() {
    const url = `${this.baseUrl}/comments?api_key=${this.apiKey}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error("Error fetching show data", error);
    }
  }

  // create a class method to post new comment to the API

  async postComment(commentObj) {
    const url = `${this.baseUrl}/comments?api_key=${this.apiKey}`;

    try {
      const response = await axios.post(url, commentObj);

      // const response = await axios.post(url, commentObj, {
      //     headers: { 'Content-Type': 'application/json' },
      // });

      return response.data;
    } catch (error) {
      console.error("Error fetching show data", error);
    }
  }
}
