import axios from "axios";
const url = `http://api.weatherapi.com/v1/forecast.json?key=`;
const apiKey = "ab89816cfc3d4c7890352045232202 ";
const geoURL = `http://api.openweathermap.org/geo/1.0/direct?q=`;
const APIKEY = "d83865e8c4925df451bf173012222dc7";
const fiveDayURL = `https://api.openweathermap.org/data/2.5/forecast?lat=`;
// https://api.openweathermap.org/data/2.5/forecast?lat=47.6038321&lon=-122.330062&appid=d83865e8c4925df451bf173012222dc7
let cityArr = [];

export const getData = async (cityName) => {
  try {
    const { data } = await axios.get(
      `${geoURL}${cityName}&limit=1&appid=${APIKEY}`
    );
    // console.log(data);
    let lat = data[0].lat;
    let lon = data[0].lon;
    // console.log(lat);
    // console.log(lon);
    fetch(`${fiveDayURL}${lat}&lon=${lon}&appid=${APIKEY}`)
      .then((res) => res.json())
      .then((weather) => {
        console.log(weather);
        // for (let i = 0; i < weather.list.length; i++) {
        //   // console.log(weather.list[i]);
        //   // cityArr.push(weather.list[i]);
        //   console.log(weather.list[i].dt_txt.includes("00:00:00"));
        //   if (weather.list[i].dt_txt.includes("12:00:00")) {
        //     cityArr.push(weather.list[i]);
        //   }
        //   // i += 3;
        // }
        // console.log(cityArr);
        return cityArr;
      });
  } catch (error) {
    throw error;
  }
};
