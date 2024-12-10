import { WeatherStyled } from "./Weather.Styled";

import { useState, useEffect } from "react";
import axios from "axios";


export const Weather =  () => {

    const [apiData, setApiData] = useState([]);
    
      const getData = async () => {
        const url = "https://infoskaerm.techcollege.dk/umbraco/api/content/getcanteenmenu/";
        const result = await axios.get(url);
        setApiData(result.data.Days);
      };
    
      useEffect(() => {
        getData();
      }, [setApiData]);
    
      console.log(apiData);
    
    return(
        <WeatherStyled>
            <h1>Weather</h1>

            <ul>
            {apiData && apiData.map((item, key)=>{
                return(
                    <li key={key}>{item.DayName}</li>
                )
            })}
            </ul>
        </WeatherStyled>
    )
}