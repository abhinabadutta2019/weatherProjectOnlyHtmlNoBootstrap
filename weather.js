class Weather {
  constructor(city) {
    this.apiKey = "";
    // this.lat = lat;
    // this.lon = lon;
    this.city = city;
  }

  //Fetch Weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`
    );

    const responseData = await response.json();

    return responseData;
  }

  //change weather location
  changeLocation(city) {
    // this.lat = lat;
    // this.lon = lon;
    this.city = city;
  }
}
