import React from "react";

function HourlyCard(props) {
  //   console.log(props);
  const img2 = `http://openweathermap.org/img/w/${props.data.weather[0].icon}.png`;

  const TempMax = props.data.main.temp_max;
  const TempMin = props.data.main.temp_min;
  const CurrTemp = props.data.main.temp;
  const time = props.data.dt_txt.substring(11, 16);
  const FeelsLike = props.data.main.feels_like;
  return (
    <div className="hourly-forecast">
      <p>
        Time: {time} <br />
        Temperature: {CurrTemp}°C
        <br />
        <img src={img2} alt="img" />
        <br />
        {props.data.weather[0].description}
        <br />
        Min Temp:: {TempMin}°C
        <br />
        Max Temp: {TempMax}°C
        <br />
        Feels Like: {FeelsLike}°C
      </p>
    </div>
  );
}

export default HourlyCard;
