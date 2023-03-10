// import { findAllByDisplayValue } from "@testing-library/react";
import axios from "axios";
import { useState } from "react";
const url = `http://api.weatherapi.com/v1/forecast.json?key=`;
const geoURL = `http://api.openweathermap.org/geo/1.0/direct?q=`;
const APIKEY = "d83865e8c4925df451bf173012222dc7";
const fiveDayURL = `https://api.openweathermap.org/data/2.5/forecast?lat=`;
const currentDayURL = `https://api.openweathermap.org/data/2.5/weather?lat=`;

export const getData = async (cityName) => {
  //   const [dailyData, setDailyData] = useState(null);
  //   const [forecastData, setForecastData] = useState(null);

  try {
    const { data } = await axios.get(
      `${geoURL}${cityName}&limit=1&appid=${APIKEY}`
    );
    // console.log(data);
    let lat = data[0].lat;
    let lon = data[0].lon;
    // console.log(lat);
    // console.log(lon);
    let fiveFetch = fetch(`${fiveDayURL}${lat}&lon=${lon}&appid=${APIKEY}`);
    let currFetch = fetch(`${currentDayURL}${lat}&lon=${lon}&appid=${APIKEY}`);
    Promise.all([currFetch, fiveFetch])
      .then(async (res) => {
        const currentData = await res[0].json();
        const forecastData = await res[1].json();
        // setDailyData(currentData);
        // setForecastData(forecastData);

        console.log(currentData);
        console.log(forecastData);
        return { sucess: true, currentData, forecastData };
      })
      .catch((error) => {
        console.log(error);
        return { sucess: false, error };
      });
    //     fetch(`${fiveDayURL}${lat}&lon=${lon}&appid=${APIKEY}`)
    //       .then((res) => res.json())
    //       .then((weather) => {
    //         console.log(weather);
    //         // for (let i = 0; i < weather.list.length; i++) {
    //         //   // console.log(weather.list[i]);
    //         //   // cityArr.push(weather.list[i]);
    //         //   console.log(weather.list[i].dt_txt.includes("00:00:00"));
    //         //   if (weather.list[i].dt_txt.includes("12:00:00")) {
    //         //     cityArr.push(weather.list[i]);
    //         //   }
    //         //   // i += 3;
    //         // }
    //         // console.log(cityArr);
    //         return weather;
    //       });
    //   } catch (error) {
    //     throw error;
    //   }
    //   fetch(`${fiveDayURL}${lat}&lon=${lon}&appid=${APIKEY}`)
  } catch (error) {
    console.log(error);
  }
};
