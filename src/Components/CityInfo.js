import styled from "styled-components";

const WeatherLogo = styled.img`
  width: 140px;
  heaight: 140px;
  margin: 40px auto;
`;

const SearchCityLabel = styled.span`
  color: black;
  font-size: 18px;
  font-weight: bold;
  margin: 10px auto;
`;

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  border: black solid 1px;
  color: black;
  font-weight: bold;
  margin: 20px auto;
  & input {
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    font-weight: bold;
  }
  & button {
    padding: 10px;
    font-size: 14px;
    color: whitesmoke;
    background-color: black;
    outline: none;
    font-weight: bold;
    cursor: pointer;
  }
`;

const CityInfo = ({ setCity, fetchWeather }) => {
  return (
    <>
      <WeatherLogo src="/icons/weather-logo.png" />
      <SearchCityLabel>Enter City Here </SearchCityLabel>
      <SearchBox onSubmit={fetchWeather}>
        <input
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
          required
        />
        <button type="submit">Search</button>
      </SearchBox>
    </>
  );
};

export default CityInfo;
