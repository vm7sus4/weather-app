import "./Search.css";
import Input from "../Input/Input";
import axios from "axios";

const SearchBar = () => {
  let city = "Mwanza";
  const API_KEY = `${process.env.REACT_APP_OWM_API_KEY}`;
  axios
    .get(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    )
    .then((response) => {
      console.log(response.data);
    });

  return (
    <div className="container">
      <Input />
    </div>
  );
};

export default SearchBar;
