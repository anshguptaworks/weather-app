import React, { useState } from "react";
import styles from "./landingPage.module.scss";
import Card from "../../components/Card";
import SearchBar from "../../components/SearchBar";
import { getWeatherByCity } from "../../api/city/getWeatherByCity";

const LandingPage = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async (searchCity) => {
    try {
      const cityName = searchCity || city;
      const response = await getWeatherByCity(cityName);
      setWeatherData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const kelvinToCelsius = (kelvin) => kelvin - 273.15;

  return (
    <div className={styles.container}>
      <Card className={styles.cardContainer}>
        <div className={styles.heading}>Weather App</div>
        <SearchBar
          onSearch={(cityName) => handleSearch(cityName)}
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </Card>

      <Card className={styles.weatherContainer}>
        <h1 className={styles.text}>{weatherData?.name || "Indore"}</h1>
        <h2 className={styles.text}>
          {weatherData?.weather[0]?.description || "cloudy"}
        </h2>
        <div className={styles.tempretureWrapper}>
          <h3 className={styles.text}>
            {weatherData?.main?.temp
              ? Math.round(kelvinToCelsius(weatherData.main.temp))
              : "-"}
            °C
          </h3>
          |
          <h4 className={styles.text}>
            Feels like{" "}
            {weatherData?.main?.feels_like
              ? Math.round(kelvinToCelsius(weatherData.main.feels_like))
              : "-"}
            °C
          </h4>
        </div>
      </Card>
    </div>
  );
};

export default LandingPage;
