import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./SearchBox.css"
import { useState } from 'react';

function SearchBox( { infoData } ) {

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "cd62b7c8d27453ec0cfd5762678b83c2";
    
    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResult = await response.json();
            console.log(jsonResult);
            let result = {
                city_name: jsonResult.name,
                temp: jsonResult.main.temp,
                tempMin: jsonResult.main.temp_min,
                tempMax: jsonResult.main.temp_max,
                feelsLike: jsonResult.main.feels_like,
                humidity: jsonResult.main.humidity,
                weather: jsonResult.weather[0].description,
                country: jsonResult.sys.country
            }
            //console.log(result);
            return result;
        } catch (err) {
            throw err;
        }
        
    }

    let handleChange = (event) => {
       setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(city);
            setCity("");
            let infoResult = await getWeatherInfo();
            infoData(infoResult); //Sending the data to WeatherApp component
            setError(false);
        } catch (error) {
            setError(true);
        }
    }

    return (
        <div className='Searchbox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" value={city} onChange={handleChange} label="City" variant="outlined" required />
                <br />
                <br />
                <Button type='submit' variant="contained" endIcon={<SendIcon />}> Send </Button>
                {error && <h4 style={{color:"red"}}>No such city available in database.</h4>}
            </form>
            
        </div>
    )
}

export default SearchBox;