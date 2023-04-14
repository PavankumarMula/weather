import React from "react";
import styled from "styled-components";

//icon Images
export const WeatherInfoIcons = {
  temp: "/weather/icons/temp.png",
  humidity: "/weather/icons/humidity.png",
  wind: "/weather/icons/wind.png",
  rain: "/weather/icons/rainy.png",
};

const WeatherCondition = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin: 30px auto;
`;

const Condition = styled.span`
  margin: 20px auto;
  text-transform: capitalize;
  font-size: 14px;
  & span {
    font-size: 28px;
  }
`;

const WeatherLogo = styled.img`
  width: 100px;
  heaight: 100px;
  margin: 5px auto;
`;

const Location = styled.span`
  margin: 15px auto;
  text-transform: capitalize;
  font-size: 28px;
  font-weight: bold;
`;

const WeatherInfoLabel = styled.span`
  margin: 20px 25px 10px;
  text-transform: capitalize;
  text-align: start;
  width: 90%;
  font-weight: bold;
  font-size: 14px;
`;
const WeatherInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px 10px;
`;

const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
  margin-bottom: 10px;
`;

const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  text-align: center;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;
const Button = styled.button`
  position: absolute;
  top: 120px;
  left: 530px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 24px;
`;

const WeatherInfoComponent = (props) => {
  const { name, value } = props;
  return (
    <>
      <InfoContainer>
        <InfoIcon src={WeatherInfoIcons[name]} />
        <InfoLabel>
          {value}
          <span>{name}</span>
        </InfoLabel>
      </InfoContainer>
    </>
  );
};

const WeatherInfo = ({ weather, backToCity }) => {
  const navigateToHome = () => {
    backToCity();
  };
  return (
    <>
      <WeatherCondition>
        <Button onClick={navigateToHome}>{`←`}</Button>
        <Condition>
          <span>{`${Math.floor(weather.main.temp - 273)}°C`}</span>
          {` | ${weather.weather[0].main}`}
        </Condition>
        <WeatherLogo src="/icons/sun.png" />
      </WeatherCondition>
      <Location>{`${weather.name},${weather.sys.country}`}</Location>
      <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
      <WeatherInfoContainer>
        <WeatherInfoComponent name="temp" value={weather.main.temp} />
        <WeatherInfoComponent name="humidity" value={weather.main.humidity} />
        <WeatherInfoComponent name="wind" value={weather.wind.speed} />
        <WeatherInfoComponent name="rain" value={weather.weather[0].main} />
      </WeatherInfoContainer>
    </>
  );
};

export default WeatherInfo;
