import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

var moment = require("moment");

function DailyCard(props) {
  const navigate = useNavigate();

  //   console.log(props.completeData[0].dt_txt);
  //   console.log(props.completeData[1].dt_txt);
  //   console.log(props.completeData[2].dt_txt);
  //   console.log(props.completeData[3].dt_txt);
  //   console.log(props.completeData[4].dt_txt);
  //   console.log(props.completeData[5].dt_txt);
  let _date = new Date();

  // Assuming props.reading.dt is a UNIX timestamp
  const weekday = props.reading.dt * 1000;
  _date.setTime(weekday);

  // Adjust for Eastern Standard Time (EST)
  _date.setTime(_date.getTime());

  const _img = `http://openweathermap.org/img/w/${props.reading.weather[0].icon}.png`;

  let year = _date.getFullYear();
  let month = (_date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based, so add 1
  let day = _date.getDate().toString().padStart(2, "0");

  let formattedDate = `${year}-${month}-${day}`;
  //   console.log(_date);
  //   console.log(formattedDate);

  // console.log(_date.includes(formattedDate));
  // for (
  //   let i = props.completeData[0].main.temp_max;
  //   i < props.completeData.length;
  //   props.completeData
  // ) {
  //   console.log(i);
  // }

  // console.log(props.completeData[0].main.temp_max);
  // console.log(typeof props.completeData[0].main.temp_max);
  // console.log(props.completeData[0].dt_txt.includes(formattedDate));
  // console.log(props.completeData.length);
  let max_t = -100,
    min_t = 100,
    max_feel = -100,
    min_feel = +100;
  for (let i = 0; i < props.completeData.length; i++) {
    if (
      max_t < props.completeData[i].main.temp_max &&
      props.completeData[i].dt_txt.includes(formattedDate)
    ) {
      // console.log("MATCH " + props.completeData[i].dt_txt);
      max_t = props.completeData[i].main.temp_max;
    }
    if (
      min_t > props.completeData[i].main.temp_min &&
      props.completeData[i].dt_txt.includes(formattedDate)
    ) {
      // console.log("MATCH " + props.completeData[i].dt_txt);
      min_t = props.completeData[i].main.temp_min;
    }

    if (
      max_feel < props.completeData[i].main.feels_like &&
      props.completeData[i].dt_txt.includes(formattedDate)
    ) {
      console.log();
      max_feel = props.completeData[i].main.feels_like;
    }

    if (
      min_feel > props.completeData[i].main.feels_like &&
      props.completeData[i].dt_txt.includes(formattedDate)
    ) {
      min_feel = props.completeData[i].main.feels_like;
    }
  }
  //   console.log("max_temp :" + max_t);
  //   console.log("complete datattt :");
  //   console.log(props.completeData);

  const handleClick = () => {
    navigate(`/${formattedDate}`, {
      state: { completeData: props.completeData },
    });
  };

  return (
    <>
      <div className="link-data" onClick={handleClick}>
        <p className="date-data">{moment(_date).format("D MMMM, Y")}</p>
      </div>
      <p>
        <img src={_img} alt="img" />
        <br />
        {props.reading.weather[0].description}
        <br />
        Min Temp: {min_t}°C
        <br />
        Max Temp: {max_t}°C
        <br />
        <br />
        Min feels like: {min_feel}°C
        <br />
        Max feels like: {max_feel}°C
      </p>
    </>
  );
}

export default DailyCard;
