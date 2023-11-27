import React, { useState, useEffect } from "react";
import moment from "moment"; // Moved the import statement here
import DailyCard from "./DailyCard";
import "../App.css";

function Daily() {
  const [completeData, setCompleteData] = useState([]);
  const [dailyData, setDailyData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [currentTemp, setCurrentTemp] = useState([]);

  let display;
  if (completeData.length > 0 || hasError === false) {
    display = displayData();
  }

  function displayData() {
    return dailyData.map((reading, index) => (
      <div className="data-container" key={index}>
        <DailyCard reading={reading} completeData={completeData} />
      </div>
    ));
  }

  useEffect(() => {
    refreshData();
  }, []);

  function refreshData() {
    const _url =
      "http://api.openweathermap.org/data/2.5/forecast?lat=42.36&lon=-71.05&units=metric&appid=568ab2144f7baee0d8619a3d474ea912";

    fetch(_url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const dailyData = data.list
          .filter((reading) => reading.dt_txt.includes("00:00:00"))
          .map((item) => {
            const weekday = item.dt * 300;
            const _date = new Date(weekday);
            item.day = moment(_date).format("dddd");
            return item;
          });

        setCurrentTemp(data.list[0].main.temp);
        setCompleteData(data.list);
        setHasError(false);
        // console.log("Daily ka - ");
        // console.log(dailyData);
        setDailyData(dailyData);
      })
      .catch((err) => {
        setCompleteData([]);
        setHasError(true);
        setDailyData([]);
      });
  }
  return (
    <div className="weather-container">
      <br />
      <h2> Northeastern University Weather Forecast</h2>
      <br />
      <h3>Current Temperature : {currentTemp} °C</h3>
      <div className="weather-data-container">{display}</div>
    </div>
  );
}

export default Daily;
