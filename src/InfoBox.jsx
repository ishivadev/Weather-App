import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css"

function InfoBox({ weatherData }) {

    const Initial_Img = "https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1434118489318-42a0e62c6235?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const HOT_URL = "https://images.unsplash.com/photo-1594539131233-055e695e2593?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1668792545129-72d876248c1b?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  return (
    <div className="infoBox">
      {weatherData.city_name 
      ? ( <>
          <div className="cardContainer">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={weatherData.humidity > 80 ? RAIN_URL : weatherData.temp > 15 ? HOT_URL : COLD_URL}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {weatherData.city_name}, {weatherData.country}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary" }}
                component={"span"}
              >
                <div>
                  <p>Temperature : {weatherData.temp}&deg;C </p>
                  <p>Minimum Temperature : {weatherData.tempMin}&deg;C </p>
                  <p>Maximum Temperature : {weatherData.tempMax}&deg;C</p>
                  <p>Humidity : {weatherData.humidity}</p>
                  <p>Feels Like : {weatherData.feelsLike}</p>
                  <p>Weather : {weatherData.weather}</p>
                </div>
              </Typography>
            </CardContent>
          </Card>
          </div>
        </> ) 
        : null}
    </div>
  );
}

export default InfoBox;
