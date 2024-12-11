import { WeatherStyled } from "./Weather.Styled";

import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloud, faCloudSun, faSmog, faCloudRain, faSnowflake, faBolt } from '@fortawesome/free-solid-svg-icons';


export const Weather =  () => {

    const [apiData, setApiData] = useState([]);
    
      const getData = async () => {
        const url = "https://api.open-meteo.com/v1/forecast?latitude=57.048&longitude=9.9187&current=temperature_2m,weather_code";
        try{
          const result = await axios.get(url);
          setApiData(result.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
    
      useEffect(() => {
        getData();
        const intervalId = setInterval(getData, 60000);
        return () => clearInterval(intervalId);
      }, [setApiData]);
    
     console.log(apiData);


     const currentTemperature = apiData?.current?.temperature_2m;

     const getWeatherCondition = (code) => {
      switch (code) {
          case 0:
              return { condition: "Clear", icon: faSun };
          case 1:
          case 2:
          case 3:
              return { condition: "Partly Cloudy", icon: faCloudSun };
          case 45:
          case 48:
              return { condition: "Foggy", icon: faSmog };
          case 51:
          case 53:
          case 55:
          case 56:
          case 57:
          case 61:
          case 63:
          case 65:
          case 66:
          case 67:
          case 80:
          case 81:
          case 82:
              return { condition: "Rainy", icon: faCloudRain };
          case 71:
          case 73:
          case 75:
          case 77:
          case 85:
          case 86:
              return { condition: "Snowy", icon: faSnowflake };
          case 95:
          case 96:
          case 99:
              return { condition: "Thunderstorm", icon: faBolt };
          default:
              return { condition: "Unknown", icon: faCloud };
      }
  };


    const currentWeatherCode = apiData?.current?.weather_code;
    console.log("currentWeatherCode:",currentWeatherCode);  
    
  

 const weather = getWeatherCondition(currentWeatherCode);
 
  const currentWeatherIcon = weather.icon;
  


 console.log("weather:",weather);
 


 



     
    
    return(
        <WeatherStyled>
               <div>
                <p>{currentTemperature}°C</p>
                <FontAwesomeIcon icon={currentWeatherIcon} size="5x" />
            </div>

            </WeatherStyled>
    )
}