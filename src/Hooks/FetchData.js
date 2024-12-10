import { useState, useEffect } from "react";

export const useFetchData = (url, interval = 60000) => {
  const [results, setResponse] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setResponse(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();

    const intervalId = setInterval(getData, interval);
    return () => clearInterval(intervalId);
  }, [url, interval]);

  return results;
};
