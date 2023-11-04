$("#DatePicker").datepicker();
$("#DatePicker").attr("readonly", true);
$("#DatePicker").datepicker("setDate", new Date());

$(document).ready(function () {
  var TimeIntervals;
  var DateLogged;
  var WatchStop = true;

  $("#Start").click(async function () {
    if (WatchStop) {
      WatchStop = false;
      DateLogged = new Date();
      await new Promise((e) => {
        TimeIntervals = setInterval(() => {
          if (!WatchStop) {
            var TimePassed = new Date() - DateLogged;
            var hour1 = 3600000,
              minute1 = 60000,
              sec1 = 1000;
            var hours = Math.floor(TimePassed / hour1);
            var minutes = Math.floor((TimePassed % hour1) / minute1);
            var seconds = Math.floor((TimePassed % minute1) / sec1);
            var hoursStr = String(hours).padStart(2, "0");
            var minutesStr = String(minutes).padStart(2, "0");
            var secondsStr = String(seconds).padStart(2, "0");
            var timeDisplay = hoursStr + ":" + minutesStr + ":" + secondsStr;
            $("#Timer").text(timeDisplay);
          }
        }, 1000);
      });
    }
  });

  $("#Stop").click(function () {
    WatchStop = true;
    clearInterval(TimeIntervals);
  });

  $("#Reset").click(function () {
    WatchStop = true;
    clearInterval(TimeIntervals);
    $("#Timer").text("00:00:00");
  });
});
