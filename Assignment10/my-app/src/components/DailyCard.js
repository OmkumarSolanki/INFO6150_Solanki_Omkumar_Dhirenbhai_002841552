import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

function DailyCard(props) {
  const navigate = useNavigate();

  // console.log(props);

  // console.log(props.completeData[0].dt_txt);
  //   console.log(props.completeData[1].dt_txt);
  //   console.log(props.completeData[2].dt_txt);
  //   console.log(props.completeData[3].dt_txt);
  //   console.log(props.completeData[4].dt_txt);
  //   console.log(props.completeData[5].dt_txt);

  const _img = `http://openweathermap.org/img/w/${props.reading.weather[0].icon}.png`;

  let formattedDate = props.reading.dt_txt.substring(0, 10);
  // console.log(formattedDate);
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
        {/* <p className="date-data">{moment(_date).format("D MMMM, Y")}</p> */}
        <p className="date-data">{formattedDate}</p>
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
