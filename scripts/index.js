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
    // variable to pull temp data
    const temp = object.main.temp;
    // math to convert temp to F
    const conToF = (temp - 273.15) * (9-5) + 32;
    // returning the temp to be displayed
    // return `Temperature: ${conToF}`;
    // same as above but rounds the value for better display purposes
    return `Temperature: ${Math.round(conToF)} degrees (F)`;
}
// wind speed
function windSpeed(object){
    // variable wind speed will be assigned to
    const wind = object.wind.speed;
    // variable to convert the sind speep to mph
    const mphWind = wind * 2.23
    // returning the text string with the converted wind speed
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

// create map using lat and lon data
function addMap(object){
    // variables for the lat and lon
    const lat = object.coord.lat;
    const lon = object.coord.lon;
    // source url for a google map
    const map = `http://maps.google.com/maps?q=${lat},${lon}&output=embed`;
    // create iframe and set attributes
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', map);
    iframe.setAttribute('height', 270);
    iframe.setAttribute('width', 360);
    iframe.setAttribute('frameboarder', 0);
    // need to append the set iframe for it to show up
    weatherDiv.append(iframe);
}
// let theWeather;
// api url the data is coming from
const URL = "http://api.openweathermap.org/data/2.5/weather?q=Atlanta,US&APPID=2402706c5ba24136cc05967bee9e5a2e";
// use fetch (variable added to fetch function)
fetch(URL)
// 
    .then(function(response){
        return response.json()
    }).then (function(weatherData){
        console.log(weatherData)
        theWeather = weatherData
        addDataToWeather(locationName(theWeather));
        addDataToWeather(addTemp(theWeather));
        addDataToWeather(windSpeed(theWeather));
        addDataToWeather(addMap(theWeather));
    });
// calling the functions


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