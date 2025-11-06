import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';



import "./InfoBox.css";


export default function InfoBox( { info } ) {
    const INIT_URL = 
        "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGR1c3R5JTIwJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

        const HOT_URL = 
        "https://images.unsplash.com/photo-1447601932606-2b63e2e64331?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

        const COLD_URL =
        "https://images.unsplash.com/photo-1483043012503-8a8849b4c949?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";

        const RAIN_URL =
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxj7Xm_QPVoCDyz3RidN3pk4B4ydhijN6tHQ&s";
    

    return (
        <div className="InfoBox">
            <div className='CardContainer'>
            <Card sx={{ maxWidth: 345 }}>
         <CardMedia
          sx={{ height: 140 }}
          image={
            info.humidity > 80
            ? RAIN_URL
            : info.temp > 15
            ? HOT_URL 
            : COLD_URL
          }
         title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
            info.humidity > 80
            ? <ThunderstormIcon/>
            : info.temp > 15
            ?  <WbSunnyIcon/> 
            : <AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
               <p>Temperature = {info.temp}&deg;C</p>
               <p>Humidity = {info.humidity}&deg;C</p>
               <p>Min Temp = {info.tempMin}&deg;C</p>
               <p>Max Temp = {info.tempMax}&deg;C</p>
               <p>
                The weather can bedescribed as <i><b>{info.weather} </b></i>and feels like
                 {info.feelslike}&deg;C
                </p>
        </Typography>
      </CardContent>

    </Card>
    </div>
</div>
    );
}