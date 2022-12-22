//INIT storage
const storage = new Storage();

//Get stored location data
const weatherLocation = storage.getLocationData();

//Init weather object

const weather = new Weather(weatherLocation.city);
//
const ui = new UI();

//Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeatherHandler);

//change location event
//Input
document.getElementById("w-change-btn").addEventListener("click", (e) => {
  //
  e.preventDefault();
  const city = document.getElementById("city").value;

  //change location
  weather.changeLocation(city);
  //set location in localStorage
  storage.setLocationData(city);
  //

  console.log(city);

  //get weather again
  getWeatherHandler();
});
//
function getWeatherHandler() {
  weather
    .getWeather()
    .then((results) => {
      console.log(results);
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}
