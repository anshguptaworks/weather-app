import axios from "axios";

export const getWeatherByCity = (city) => {
  const apiKey = "8c8d653ab79a88bd3e2cf28c7f6ee3a4";
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  );
};
