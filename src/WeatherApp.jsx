import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

function WeatherApp() {

    let [weatherData, setWeatherdata] = useState({
        city_name: "Kolkata",
        temp: 30.44,
        tempMin: 30.44,
        tempMax: 30.44,
        humidity: 61,
        feelsLike: 33.91,
        weather: "scattered clouds",
        country: "IN"
     });

    let weatherInfo = (infoResult) => {
        setWeatherdata(infoResult);
        // setWeatherdata((currData) => {
        //     return { ...currData, city_name:data.city_name, temp: data.temp, tempMin: data.tempMin, tempMax: data.tempMax, feelsLike: data.feelsLike, humidity: data.humidity, weather: data.weather, country: data.country};
        // })
    }    

    return(
         <div style={{ textAlign: "center" }}>
         <h2>Weather App by Dev</h2>
            <SearchBox infoData={weatherInfo} />
            <InfoBox weatherData={weatherData} /> 
        </div>
    )
}

export default WeatherApp;