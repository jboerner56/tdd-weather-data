// creates variable that the weather data will be passed into to display onthe page
const weatherDiv = document.querySelector('[data-weather]');
// function to return the name of the loaction
function locationName(object) {
    // variable for the locations name
    const location = object.name;
    // returning the data so it can be called and printed
    return `Location: ${location}`;

}
// temp for the given city
function addTemp (object){
    // why does it have to have .main in the variable
    const temp = object.main.temp;
    // math to convert temp to F
    const conToF = (temp - 273.15) * (9-5) + 32;
    // returning the temp to be displayed
    // return `Temperature: ${conToF}`;
    // same as above but rounds the value for better display purposes
    return `Temperature: ${Math.round(conToF)} degrees (F)`;
}
function windSpeed(object){
    const wind = object.wind.speed;
    const mphWind = wind * 2.23
    return `Wind speed: ${mphWind} (mph)`
}
// function to add whatever data is passed into the weather div
function addDataToWeather(data){
    // will create new h3 element to display the data
    const newData = document.createElement('h3');
    // appends the given data to the page
    newData.textContent = data;
    weatherDiv.append(newData)
}


// calling the functions
addDataToWeather(locationName(atlWeather));
addDataToWeather(addTemp(atlWeather));
addDataToWeather(windSpeed(atlWeather));


// // Implement the following functions to fulfill the tests!
// function getLocationName(atlWeather) {
//     let name = atlWeather["name"];
//     return name;
// }

// function getLocationCountry(atlWeather) {
//     let country = atlWeather["sys"]["country"];
//     return country
// }
// function getLocationLatitude(atlWeather) {
//     let lat = atlWeather["coord"]["lat"];
//     return lat
// }
// function getLocationLongitude(atlWeather) {
//     let long = atlWeather["coord"]["lon"];
//     return long;
// }
// function getDescription(atlWeather) {
//     let desc = atlWeather["weather"][0]["description"];
//     console.log(desc)
//     return desc;
// }
// function getWindSpeed(atlWeather) {
//     let speed = atlWeather["wind"]["speed"];
//     console.log(speed);
//     return speed
// }
// function getSunrise(atlWeather) {
//     let sun = atlWeather["sys"]["sunrise"]
//     return sun
// }



// // create dom element and return city name, temp, and wind speed.
// // variable that creates the container the data will be shown in

// // Please ignore the following
// try {
//     module.exports = {
//         getLocationName,
//         getLocationCountry,
//         getLocationLatitude,
//         getLocationLongitude,
//         getDescription,
//         getWindSpeed,
//         getSunrise
//     }
// } catch (e) {
    
// }