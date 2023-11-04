var userNameInput = localStorage.getItem("UserName");
$("#Welcome").text("Welcome " + userNameInput);

$(document).ready(function () {
  var isValidNumber1 = false,
    isValidNumber2 = false;

  var regExNumber = /^[0-9]+$/;
  var regExAlph = /^[a-zA-Z0-9]+$/;
  var regExSpec = /[^a-zA-Z0-9]/;

  var number1 = $("#Number1");
  number1.on("input", validate);

  var number2 = $("#Number2");
  number2.on("input", validate);

  function validate(e) {
    var value = $(e.target).val().trim();
    var type = this.id; // we are getting the id of the field
    var em = "error_" + type;

    switch (type) {
      case "Number1":
        if (!value.match(regExNumber)) {
          if (value == "") {
            $("#" + em).text("Number cannot be Empty");
          } else if (value.match(regExAlph)) {
            $("#" + em).text("Alphabets are not allowed");
          } else if (value.match(regExSpec)) {
            $("#" + em).text("Special Characters are not allowed");
          } else {
            $("#" + em).text("Invalid Number");
          }
          $("#" + em).css("display", "block");
          $(this).css("border", "5px solid red");
          isValidNumber1 = false;
          console.log("isValidNumber1", isValidNumber1);
        } else {
          $("#" + em).css("display", "none");
          $(this).css("border", "");
          isValidNumber1 = true;
          console.log("isValidNumber1", isValidNumber1);
        }
        break;

      case "Number2":
        if (!value.match(regExNumber)) {
          if (value == "") {
            $("#" + em).text("Number cannot be Empty");
          } else if (value.match(regExAlph)) {
            $("#" + em).text("Alphabets are not allowed");
          } else if (value.match(regExSpec)) {
            $("#" + em).text("Special Characters are not allowed");
          } else {
            $("#" + em).text("Invalid Number");
          }
          $("#" + em).css("display", "block");
          $(this).css("border", "5px solid red");
          isValidNumber2 = false;
          console.log("isValidNumber2", isValidNumber2);
        } else {
          $("#" + em).css("display", "none");
          $(this).css("border", "");
          isValidNumber2 = true;
          console.log("isValidNumber2", isValidNumber2);
        }
        break;
    }

    if (isValidNumber1 == true && isValidNumber2 == true) {
      $("#Add").attr("disabled", false);
      $("#Subtract").attr("disabled", false);
      $("#Multiply").attr("disabled", false);
      $("#Divide").attr("disabled", false);
    } else {
      $("#Add").attr("disabled", true);
      $("#Subtract").attr("disabled", true);
      $("#Multiply").attr("disabled", true);
      $("#Divide").attr("disabled", true);
    }
  }
});

$("#Add, #Subtract, #Multiply, #Divide").on("click", (e) => {
  var Number1 = $("#Number1").val();
  var Number2 = $("#Number2").val();
  var Selected = $(e.target).text().trim();

  var AnswerCalculated;
  if (Selected == "Add") {
    AnswerCalculated = parseInt(Number1) + parseInt(Number2);
  } else if (Selected == "Subtract") {
    AnswerCalculated = Number1 - Number2;
  } else if (Selected == "Multiply") {
    AnswerCalculated = Number1 * Number2;
  } else if (Selected == "Divide") {
    if (Number2 != "0") {
      AnswerCalculated = Number1 / Number2;
    } else {
      AnswerCalculated = "Error";
    }
  }

  if (AnswerCalculated == "Error") {
    $("#Answer").val("");
    $("#Answer").css("border", "5px solid red");
    $("#error_Answer").css("display", "block");
    $("#error_Answer").text("You cannot divide by Zero!");
  } else {
    $("#error_Answer").css("display", "none");
    $("#Answer").css("border", "");
    $("#Answer").val(AnswerCalculated);
  }
});
