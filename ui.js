class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.temp = document.getElementById("w-temp");

    //
    this.icon = document.getElementById("w-icon");
    //
    this.temp_min = document.querySelector("#w-temp-min");
    this.temp_max = document.getElementById("w-temp-max");
    this.feels_like = document.getElementById("w-feels-like");
  }
  //
  paint(weather) {
    //textcontent e value dhokano hocche
    this.location.textContent = `Location: ${weather.name}`;
    this.temp.textContent = `Temparature: ${weather.main.temp}`;
    //this.location.textContent = `Location: ${weather.weather[0].description[2]}`;
    //
    this.temp_min.textContent = `Temp Min: ${weather.main.temp_min}`;
    this.temp_max.textContent = `Temp Max: ${weather.main.temp_max}`;
    this.temp_min.textContent = `Feels Like: ${weather.main.feels_like}`;
  }
}
