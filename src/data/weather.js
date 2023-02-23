import axios from "axios";
const url = `http://api.weatherapi.com/v1/forecast.json?key=`;
const apiKey = "ab89816cfc3d4c7890352045232202 ";

export const getData = async (cityName) => {
  try {
    const { data } = await axios.get(
      `${url}${apiKey}&q=${cityName}&days=5&aqi=no&alerts=no`
    );
    return data;
  } catch (error) {
    throw error;
  }
};
