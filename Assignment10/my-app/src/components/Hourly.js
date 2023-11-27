import React, { useState, useEffect } from "react";
import HourlyCard from "./HourlyCard";
import { useLocation, useParams } from "react-router-dom";
import "../App.css";

function Hourly() {
  const location = useLocation();
  const { day } = useParams();
  var tempData = [];

  const completeData = location.state.completeData;

  useEffect(() => {
    // console.log("location");
    // console.log(location);
  }, [location]);

  useEffect(() => {
    if (completeData && day) {
      //   console.log(day);
      //   console.log(completeData[0].dt_txt);
      tempData = completeData.filter((cd) => {
        // console.log("day", day);
        // console.log("cd.dt_txt", cd.dt_txt.substring(0, 10));
        // console.log(cd.dt_txt.substring(0, 10) === day);
        return cd.dt_txt.substring(0, 10) === day;
      });

      //   console.log("Temp data aa ");
      //   console.log(tempData);
      setData(tempData);
    }
  }, [day, completeData]);

  const [data, setData] = useState([]);

  return (
    <div className="card-container">
      <h3>Detail Weather Forecast</h3>
      {displayHourlyData()}
    </div>
  );

  function displayHourlyData() {
    return data.map((value, index) => (
      <div key={index} className="hourly-container">
        <HourlyCard data={value} />
      </div>
    ));
  }
}

export default Hourly;
