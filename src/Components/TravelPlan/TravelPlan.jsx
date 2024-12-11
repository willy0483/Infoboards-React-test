import { TravelPlanStyled } from "./TravelPlan.Styled";

import { Container } from "../Container/Container"
import { Title } from "../Title/Title";
import { DateTime } from "../Date/Date";
import { Weather } from "../Weather/Weather";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus } from '@fortawesome/free-solid-svg-icons';

import axios from "axios";
import { useState,useEffect } from "react";



export const TravelPlan = () => {

    const [apiData, setApiData] = useState(null);

    const getData = async () => {
        const url = "https://xmlopen.rejseplanen.dk/bin/rest.exe/multiDepartureBoard?id1=851400602&id2=851973402&rttime&format=json&useBus=1";
        try {
            const result = await axios.get(url);
            // console.log("Fetched data:", result.data);
            setApiData(result.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getData();
        const intervalId = setInterval(getData, 60000);
        return () => clearInterval(intervalId);
    }, []);

    // console.log("apiData:", apiData);

    let buslist = [];

    if (apiData && apiData.MultiDepartureBoard) {
        buslist = apiData.MultiDepartureBoard.Departure.slice(0, 5).map(item => ({
            line: item.line,
            direction: item.direction,
            time: item.time
        }));
    } else {
        console.log("Data is not yet available");
    }

    const getClassName = (line) => {
        switch (line) {
            case '18':
                return 'red';
            case '17':
                return 'yellow';
            case '6':
                return 'green';
            default:
                return 'defaultClass';
        }
    };

    return(
        <TravelPlanStyled>
        <Container display="flex" justify="center" direction="column">
            <Title font="Arial" size={3} color="black" ><h1><span>TECH</span>COLLEGE</h1></Title>
            <FontAwesomeIcon icon={faBus} size="3x" color="#fff" />
            <Container display="flex" direction="column" align="center" margin="0 0 1rem 0">
                {buslist.map((bus, index) => (

                    <div key={index} className="bus">
                        <p className={getClassName(bus.line)}>{bus.line}</p>
                        <p>{bus.direction}</p>
                        <p>{bus.time}</p>
                    </div>
                ))}
            </Container>
            <Container display="flex" justify="center">
            <DateTime></DateTime>
            <Weather></Weather>
            </Container>
        </Container>
    </TravelPlanStyled>
    )
}