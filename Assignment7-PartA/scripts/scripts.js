$(document).ready(function () {
  var isValidEmail = false,
    isValidUserName = false,
    isValidPassword = false,
    isValidConfirmPassword = false;

  var regExUserName = /^[a-zA-Z0-9 ]{3,}$/;
  var regExEmail = /^[a-zA-Z0-9_.+-]+@(northeastern)\.edu$/;
  //   Minimum eight characters, at least one letter, one number and one special character:
  var regExPass =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  var emailId = $("#emailAdd");
  emailId.on("input", validate);

  var userName = $("#userName");
  userName.on("input", validate);

  var password = $("#password");
  password.on("input", validate);

  var confirmPassword = $("#confirmPassword");
  confirmPassword.on("input", validate);

  function validate(e) {
    var value = $(e.target).val().trim();
    var type = this.id; // we are getting the id of the field
    var em = "error_" + type;

    switch (type) {
      case "emailAdd":
        if (!value.match(regExEmail)) {
          if (value == "") {
            $("#" + em).text("Email address cannot be Empty");
          } else if (value.includes(".com")) {
            $("#" + em).text("Use Northeastern email address");
          } else {
            $("#" + em).text("Invalid email address");
          }
          $("#" + em).css("display", "block");
          $(this).css("border", "5px solid red");
          isValidEmail = false;
          console.log("isValidEmail", isValidEmail);
        } else {
          $("#" + em).css("display", "none");
          $(this).css("border", "");
          isValidEmail = true;
          console.log("isValidEmail", isValidEmail);
        }
        break;

      case "userName":
        if (!value.match(regExUserName)) {
          console.log(value.length);
          if (value == "") {
            $("#" + em).text("User Name cannot be Empty");
          } else if (value.length <= 3) {
            $("#" + em).text(
              "User Name length should be greater than or equal 3"
            );
          } else if (value.length >= 15) {
            $("#" + em).text("User Name length should be less than 15");
          } else {
            $("#" + em).text("Invalid User Name");
          }
          $("#" + em).css("display", "block");
          $(this).css("border", "5px solid red");
          isValidUserName = false;
          console.log("isValidUserName", isValidUserName);
        } else {
          if (value.length >= 15) {
            $("#" + em).text("User Name length should be less than 15");
            $("#" + em).css("display", "block");
            $(this).css("border", "5px solid red");
            isValidUserName = false;
            console.log("isValidUserName", isValidUserName);
          } else {
            $("#" + em).css("display", "none");
            $(this).css("border", "");
            isValidUserName = true;
            console.log("isValidUserName", isValidUserName);
          }
        }
        break;

      case "password":
        if (!value.match(regExPass)) {
          if (value == "") {
            $("#" + em).text("Password cannot be Empty");
          } else {
            $("#" + em).text(
              "Password must have minimum eight characters, at least one letter, one number and one special character"
            );
          }
          $("#" + em).css("display", "block");
          $(this).css("border", "5px solid red");
          isValidPassword = false;
          console.log("isValidPassword", isValidPassword);
        } else {
          if (value.length >= 15) {
            $("#" + em).text("Password length must be smaller than 15");
            $("#" + em).css("display", "block");
            $(this).css("border", "5px solid red");
            isValidPassword = false;
            console.log("isValidPassword", isValidPassword);
          } else {
            $("#" + em).css("display", "none");
            $(this).css("border", "");
            isValidPassword = true;
            console.log("isValidPassword", isValidPassword);
          }
        }
        break;

      case "confirmPassword":
        if (!value.match($("#password").val().trim())) {
          $("#" + em).text("Both Password should Match!");
          $("#" + em).css("display", "block");
          $(this).css("border", "5px solid red");
          isValidConfirmPassword = false;
          console.log("isValidConfirmPassword", isValidConfirmPassword);
        } else {
          $("#" + em).css("display", "none");
          $(this).css("border", "");
          isValidConfirmPassword = true;
          console.log("isValidConfirmPassword", isValidConfirmPassword);
        }
        break;
    }

    if (
      isValidEmail == true &&
      isValidUserName == true &&
      isValidPassword == true &&
      isValidConfirmPassword == true
    ) {
      $("#LoginButton").attr("disabled", false);
    } else {
      $("#LoginButton").attr("disabled", true);
    }
  }
});

var UserLogin = () => {
  console.log($("#userName").val());
  localStorage.setItem("UserName", $("#userName").val());
  window.location.href = "./calc.html";
};
