import React, { useState, useEffect } from "react";
import "./Search.css";
import Input from "../Input/Input";
import axios from "axios";

const SearchBar = () => {
  const [myCity, setCity] = useState("Mwanza");
  const API_KEY = `${process.env.REACT_APP_OWN_API_KEY}`;
  const [weatherData, setWeather] = useState([]);

  useEffect(() => {
    const getUserCity = () => {
      let userInput = prompt("Enter a City");
      setCity(userInput);
    };
    getUserCity();
  }, []);

  useEffect(() => {
    const fetchWeatherData = (city) => {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
        )
        .then((response) => {
          setWeather(response.data);
        });
    };
    fetchWeatherData(myCity);
  }, [API_KEY, myCity]);
  console.log(weatherData);

  return (
    <div className="container">
      <Input />
    </div>
  );
};

export default SearchBar;
