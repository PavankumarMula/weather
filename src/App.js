import styled from "styled-components"; // Importing styled-components for customizing UI styling
import CityInfo from "./Components/CityInfo"; // Importing CityInfo component
import WeatherInfo from "./Components/WeatherInfo"; // Importing WeatherInfo component
import { useState } from "react"; // Importing useState hook from React

// Using styled-components to customize UI style.
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: whitesmoke;
  margin: auto;
  align-items: center;
  padding: 20px 10px;
  border-radius: 4px;
  width: 300px;
  font-family: montserrat;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Applabel = styled.span`
  color: #4285f4;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Georgia, 'Times New Roman', Times, serif
`;

// OpenWeatherMap API key
let API_KEY = "5ae527d862ac27d8bdda1f1fd758a93e";

function App() {
  // Setting up state variables with useState hook
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [showHome, setShowHome] = useState(false);

  // Handler function for back button in WeatherInfo component
  const showHomeHandler = () => {
    setShowHome(true); // Set showHome state to true
    setCity(); // Reset city state
    setWeather(); // Reset weather state
  };

  // Function to fetch weather data from OpenWeatherMap API
  const fetchWeather = async (e) => {
    e.preventDefault(); // Prevent page refresh on form submission
    e.target.reset(); // Reset form input field
    if (city === "") return; // If no city is entered, return and do nothing
    try {
      // Make API call to OpenWeatherMap API with city and API key
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      if (response.ok) {
        // If response is successful, set weather state to fetched data
        const weatherData = await response.json();
        setWeather(weatherData);
        setErrorMessage(""); // Reset error message
      } else {
        // If response is not successful, set error message state with message from response
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
    } catch (error) {
      // If there is an error, set error message state with error message
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      <Container>
        <Applabel>Weather App</Applabel>
        {errorMessage ? (
          <CityInfo
            errorMessage={errorMessage}
            setCity={setCity}
            fetchWeather={fetchWeather}
          />
        ) : city && weather ? (
          <WeatherInfo weather={weather} backToCity={showHomeHandler} />
        ) : (
          <CityInfo setCity={setCity} fetchWeather={fetchWeather} />
        )}
        {errorMessage ? errorMessage : ""}
      </Container>
    </>
  );
}

export default App;
