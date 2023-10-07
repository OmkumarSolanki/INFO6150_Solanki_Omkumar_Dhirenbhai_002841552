var form = document.getElementById("myForm");

// initially we are setting to false
var validName = false;
var validEmail = false;
var validPhone = false;
var validAddress1 = false;
var validAddress2 = true;
var validZipCode = false;
var validComments = false;
var validReason = false;

var regExName = /^[a-zA-Z]{3,}(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
var regExEmail =
  /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(northeastern)\.edu$/;
var regExPhone = /^\d{3}\d{3}\d{4}$/;
var regExAddress1 = /^[A-Za-z0-9'\.\-\s\,]/;
var regExAddress2 = /^[A-Za-z0-9'\.\-\s\,]/;
var regExZipCode = /^\d{5}(-\d{4})?$/;
var regExComments = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

var firstName = document.getElementById("firstName");
firstName.addEventListener("input", validate);

var emailId = document.getElementById("emailId");
emailId.addEventListener("input", validate);

var phoneNumber = document.getElementById("phoneNumber");
phoneNumber.addEventListener("input", validate);

var address1 = document.getElementById("address1");
address1.addEventListener("input", validate);

var address2 = document.getElementById("address2");
address2.addEventListener("input", validate);

var zipcode = document.getElementById("zipcode");
zipcode.addEventListener("input", validate);

var comments = document.getElementById("comments");
comments.addEventListener("input", validate);

var commentReason = document.getElementById("ratingDescInput");
commentReason.addEventListener("input", validate);

function CheckSubmit() {
  console.log("Trigger");
  if (
    (document.getElementById("miss").checked ||
      document.getElementById("mr").checked ||
      document.getElementById("mrs").checked) &&
    validName &&
    validEmail &&
    validPhone &&
    validAddress1 &&
    validZipCode &&
    (document.getElementById("Facebook").checked ||
      document.getElementById("Google").checked ||
      document.getElementById("Yelp").checked) &&
    document.getElementById("comments").value != "" &&
    document.getElementById("rating").value != "select" &&
    (document.getElementById("Prof1").checked ||
      document.getElementById("Prof2").checked) &&
    document.getElementById("ratingDescInput").value != ""
  ) {
    console.log("Work");
    document.getElementById("SubmitForm").disabled = false;
  } else {
    console.log("Disable");
    document.getElementById("SubmitForm").disabled = true;
  }
}

// write a function to validate my input
function validate(e) {
  var value = e.target.value;
  var type = this.id; // we are getting the id of the field
  var em = "error_" + type;

  switch (type) {
    case "firstName":
      if (!value.trim().match(regExName)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validName = false;
        console.log("validname", validName);
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validName = true;
        console.log("validname", validName);
      }
      break;
    case "emailId":
      if (!value.trim().match(regExEmail)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validEmail = false;
        console.log("validEmail", validEmail);
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validEmail = true;
        console.log("validEmail", validEmail);
      }
      break;

    case "phoneNumber":
      if (!value.trim().match(regExPhone)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validPhone = false;
        console.log("validPhone", validPhone);
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validPhone = true;
        console.log("validPhone", validPhone);
      }
      break;

    case "address1":
      if (!value.trim().match(regExAddress1)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validAddress1 = false;
        console.log("validAddress1", validAddress1);
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validAddress1 = true;
        console.log("validAddress1", validAddress1);
      }
      break;

    case "address2":
      if (!value.trim().match(regExAddress1)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validAddress2 = false;
        console.log("validAddress2", validAddress2);
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validAddress2 = true;
        console.log("validAddress2", validAddress2);
      }
      break;

    case "zipcode":
      if (!value.trim().match(regExZipCode)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validZipCode = false;
        console.log("regExZipCode", regExZipCode);
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validZipCode = true;
        console.log("regExZipCode", regExZipCode);
      }
      break;

    case "comments":
      if (!value.trim().match(regExComments)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validComments = false;
        console.log("regExComments", regExComments);
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validComments = true;
        console.log("regExComments", regExComments);
      }
      break;
    case "ratingDescInput":
      console.log("OM");
      if (!value.trim().match(regExComments)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validReason = false;
        console.log("commentReason", commentReason);
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validReason = true;
        console.log("commentReason", commentReason);
      }
      break;
  }
  CheckSubmit();
}

// write a function submitted
function submitted(e) {
  if (
    validName &&
    validEmail &&
    validPhone &&
    validAddress1 &&
    validAddress2 &&
    validZipCode &&
    (document.getElementById("Facebook").checked == true ||
      document.getElementById("Google").checked == true ||
      document.getElementById("Yelp").checked == true) &&
    document.getElementById("rating").value != "select"
  ) {
    // alert("Data entered Sucessfull");
  } else {
    // alert("please enter valid data");
  }
}

function checkUncheckRating() {
  var prof1 = document.getElementById("Prof1");
  var prof2 = document.getElementById("Prof2");
  if (prof1.checked || prof2.checked) {
    document.getElementById("ratingDesctiption").classList.remove("hidden");
  } else {
    document.getElementById("ratingDesctiption").classList.add("hidden");
  }
  CheckSubmit();
}

function changeRating() {
  let Selected = document.getElementById("rating").value;
  //console.log(Selected);
  if (Selected == "select") {
    document.getElementById("ratingDetails").classList.add("hidden");
    document.getElementById("ratingDesctiption").classList.add("hidden");
    document.querySelector("#ratingDetails").innerHTML = "";
    document.getElementById("ratingDescInput").value = "";
  } else {
    document.getElementById("ratingDetails").classList.remove("hidden");
    document.getElementById("ratingDesctiption").classList.add("hidden");
    document.getElementById("ratingDescInput").value = "";
    document.querySelector("#ratingDetails").innerHTML =
      '<label>Rating Details*:</label><input type="checkbox" onchange="checkUncheckRating()" id="Prof1" name="source" value="Prof1">\n Prof ' +
      (Selected * 2 - 1) +
      '\n<input type="checkbox" onchange="checkUncheckRating()" id="Prof2" name="source" value="Prof2">\n Prof ' +
      Selected * 2 +
      "\n";
  }
  CheckSubmit();
}

// setInterval(CheckSubmit, 500);

function SubmitFormData() {
  var Title = "";
  if (document.getElementById("miss").checked) {
    Title = "Miss";
  } else if (document.getElementById("mr").checked) {
    Title = "Mr";
  } else if (document.getElementById("mrs").checked) {
    Title = "Mrs";
  }
  // console.log(Title);
  var FullName = document.getElementById("firstName").value;
  var EmailID = document.getElementById("emailId").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var address1 = document.getElementById("address1").value;
  var address2 = document.getElementById("address2").value;
  var zipcode = document.getElementById("zipcode").value;
  var hear = "";
  if (
    document.getElementById("Facebook").checked &&
    document.getElementById("Google").checked &&
    document.getElementById("Yelp").checked
  ) {
    hear = "Facebook Google Yelp";
  } else if (
    document.getElementById("Facebook").checked &&
    document.getElementById("Google").checked
  ) {
    hear = "Facebook Google";
  } else if (
    document.getElementById("Google").checked &&
    document.getElementById("Yelp").checked
  ) {
    hear = "Yelp Google";
  } else if (
    document.getElementById("Facebook").checked &&
    document.getElementById("Yelp").checked
  ) {
    hear = "Yelp Facebook";
  } else if (document.getElementById("Facebook").checked) {
    hear = "Facebook";
  } else if (document.getElementById("Google").checked) {
    hear = "Google";
  } else if (document.getElementById("Yelp").checked) {
    hear = "Yelp";
  }
  var comments = document.getElementById("comments").value;
  var Rating = document.getElementById("rating").value;
  var Details = "";
  if (
    Rating == "1" ||
    Rating == "2" ||
    Rating == "3" ||
    Rating == "4" ||
    Rating == "5"
  ) {
    if (
      document.getElementById("Prof1").checked &&
      document.getElementById("Prof2").checked
    ) {
      Details = "Prof " + (Rating * 2 - 1) + " Prof " + Rating * 2;
    } else if (document.getElementById("Prof1").checked) {
      Details = "Prof " + Rating * 2 - 1;
    } else if (document.getElementById("Prof2").checked) {
      Details = "Prof " + Rating * 2;
    }
  }
  var RatingExp = document.getElementById("ratingDescInput").value;

  var newRow = document.getElementById("tableData").insertRow();

  var tt = newRow.insertCell(0);
  var fn = newRow.insertCell(1);
  var em = newRow.insertCell(2);
  var phn = newRow.insertCell(3);
  var add1 = newRow.insertCell(4);
  var add2 = newRow.insertCell(5);
  var zpc = newRow.insertCell(6);
  var hr = newRow.insertCell(7);
  var cms = newRow.insertCell(8);
  var rat = newRow.insertCell(9);
  var det = newRow.insertCell(10);
  var rate = newRow.insertCell(11);

  tt.textContent = Title;
  fn.textContent = FullName;
  em.textContent = EmailID;
  phn.textContent = phoneNumber;
  add1.textContent = address1;
  add2.textContent = address2;
  zpc.textContent = zipcode;
  hr.textContent = hear;
  cms.textContent = comments;
  rat.textContent = Rating;
  det.textContent = Details;
  rate.textContent = RatingExp;

  ResetTable();
}

function ResetTable() {
  document.getElementById("miss").checked = false;
  document.getElementById("mr").checked = false;
  document.getElementById("mrs").checked = false;
  document.getElementById("firstName").value = "";
  document.getElementById("emailId").value = "";
  document.getElementById("phoneNumber").value = "";
  document.getElementById("address1").value = "";
  document.getElementById("address2").value = "";
  document.getElementById("zipcode").value = "";
  document.getElementById("Facebook").checked = false;
  document.getElementById("Google").checked = false;
  document.getElementById("Yelp").checked = false;
  document.getElementById("comments").value = "";
  document.getElementById("rating").value = "select";
  document.getElementById("Prof1").checked = false;
  document.getElementById("Prof2").checked = false;
  document.getElementById("ratingDescInput").value = "";
  document.querySelector("#ratingDetails").innerHTML = "";
  document.getElementById("ratingDetails").classList.add("hidden");
  document.getElementById("ratingDesctiption").classList.add("hidden");
}
