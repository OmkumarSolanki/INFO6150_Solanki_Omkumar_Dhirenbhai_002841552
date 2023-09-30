// Drop Down Button Toggle Static

var dropDownImageButton = document.querySelectorAll(".dropDownImage");

function toggleDropdown() {
  this.parentElement.parentElement.nextElementSibling.classList.toggle(
    "hidden"
  );
}

dropDownImageButton.forEach((dropDown) => {
  dropDown.addEventListener("click", toggleDropdown);
});

// checkbox click Edit Delete visibility Static
function deleteEditVisibility() {
  var checkboxobj = document.querySelectorAll("input[type='checkbox']:checked");
  if (checkboxobj.length == 0) {
    // No check box checked
    document.querySelectorAll(".deleteCell").forEach((obj) => {
      obj.classList.add("hidden");
    });
    document.querySelectorAll(".editCell").forEach((obj) => {
      obj.classList.add("hidden");
    });
    const submitSelectedButton = document.querySelector("#button");
    submitSelectedButton.disabled = true;
    submitSelectedButton.style.backgroundColor = "#767676";
    submitSelectedButton.style.border = "2px solid #767676";
  } else {
    // show edit and delete
    document.querySelectorAll(".deleteCell").forEach((obj) => {
      obj.classList.remove("hidden");
    });
    document.querySelectorAll(".editCell").forEach((obj) => {
      obj.classList.remove("hidden");

      const submitSelectedButton = document.querySelector("#button");
      submitSelectedButton.disabled = false;
      submitSelectedButton.style.backgroundColor = "#fb9b04";
      submitSelectedButton.style.border = "2px solid #v=fb9b04";
    });
  }
}

// Button Disable

const submitSelectedButton = document.querySelector("#button");
submitSelectedButton.disabled = true;
submitSelectedButton.style.backgroundColor = "#767676";
submitSelectedButton.style.border = "2px solid #767676";

// Add New Student

var rowCount = 4,
  studentCount = 4;

function addNewStudentEntry() {
  const addLocation =
    document.getElementById("myTable").children[0].children.length - 1;
  const number = [
    "12345",
    "23456",
    "34567",
    "45678",
    "56789",
    "67890",
    "78901",
    "89012",
    "90123",
    "01234",
  ];

  const newRow = document.getElementById("myTable").insertRow(addLocation + 1);

  var checkboxobj = document.querySelectorAll("input[type='checkbox']:checked");

  if (checkboxobj.length > 0) {
    newRow.innerHTML =
      "<td><input id='Checkbox-" +
      studentCount +
      "' type='checkbox' /><br /><br /><img src='down.png' width='25px' id='DropDownImage-" +
      studentCount +
      "' /></td> <td>Student " +
      studentCount +
      "</td>  <td>Teacher " +
      studentCount +
      "</td><td>Approved</td><td>Fall</td><td>TA</td><td>" +
      number[(studentCount - 1) % 10] +
      "</td><td>100%</td><td class='deleteCell'><button class='hidden deleteTableCell' id='deleteTableCell-" +
      studentCount +
      "'>Delete</button></td><td class='editCell'><button class='editButtonTable hidden' id='editTableCell" +
      studentCount +
      "'>Edit</button></td>";
  } else {
    newRow.innerHTML =
      "<td><input id='Checkbox-" +
      studentCount +
      "' type='checkbox' /><br /><br /><img src='down.png' width='25px' id='DropDownImage-" +
      studentCount +
      "' /></td> <td>Student " +
      studentCount +
      "</td>  <td>Teacher " +
      studentCount +
      "</td><td>Approved</td><td>Fall</td><td>TA</td><td>" +
      number[(studentCount - 1) % 10] +
      "</td><td>100%</td><td class='deleteCell hidden'><button class='hidden deleteTableCell' id='deleteTableCell-" +
      studentCount +
      "'>Delete</button></td><td class='editCell hidden'><button class='editButtonTable hidden' id='editTableCell" +
      studentCount +
      "'>Edit</button></td>";
  }

  const newRow2 = document.getElementById("myTable").insertRow(addLocation + 2);
  newRow2.classList.add("dropDownTextArea");
  newRow2.classList.add("hidden");
  newRow2.innerHTML =
    "<td colspan='10'>   Advisor:<br><br>  Award Details<br> Summer 1-2014(TA)<br> Budget Number: <br> Tuition Number: <br> Comments:<br><br><br> Award Status:<br><br><br> </td>";

  setTimeout(function () {
    alert("Added new record for Student " + (studentCount - 1));
  }, 500);

  // Now for the dropdownimage visible and hide dynamic

  var dropDownImageButton2 = document.getElementById(
    "DropDownImage-" + studentCount
  );

  function toggleDropdown2() {
    this.parentElement.parentElement.nextElementSibling.classList.toggle(
      "hidden"
    );
  }

  dropDownImageButton2.addEventListener("click", toggleDropdown2);

  // Checkbox Created by button dynamic visibility

  var checkBoxNewStudent = document.getElementById("Checkbox-" + studentCount);

  function toggleCheckbox2() {
    if (checkBoxNewStudent.checked == false) {
      // No check box checked
      document.querySelectorAll(".deleteCell").forEach((obj) => {
        obj.classList.add("hidden");
      });
      document.querySelectorAll(".editCell").forEach((obj) => {
        obj.classList.add("hidden");
      });
      checkBoxNewStudent.parentElement.parentElement.children[8].children[0].classList.add(
        "hidden"
      );
      checkBoxNewStudent.parentElement.parentElement.children[9].children[0].classList.add(
        "hidden"
      );
      checkBoxNewStudent.parentElement.parentElement.style.backgroundColor =
        "#ffffff";
      deleteEditVisibility();
    } else {
      // show edit and delete
      checkBoxNewStudent.parentElement.parentElement.children[8].children[0].classList.remove(
        "hidden"
      );
      checkBoxNewStudent.parentElement.parentElement.children[9].children[0].classList.remove(
        "hidden"
      );
      document.querySelectorAll(".deleteCell").forEach((obj) => {
        obj.classList.remove("hidden");
      });
      document.querySelectorAll(".editCell").forEach((obj) => {
        obj.classList.remove("hidden");
      });
      checkBoxNewStudent.parentElement.parentElement.style.backgroundColor =
        "#fdfd01";
      deleteEditVisibility();
    }
  }

  checkBoxNewStudent.addEventListener("change", toggleCheckbox2);

  // Delete Functionality for dynamic

  var DeleteButtonVar = document.getElementById(
    "deleteTableCell-" + studentCount
  );

  function deleteTheRow() {
    var studTempId = this.id.split("-")[1];
    const confirmationMessage = `Do you want to delete Student ${studTempId} Details?`;
    if (confirm(confirmationMessage)) {
      this.parentElement.parentElement.parentElement.removeChild(
        this.parentElement.parentElement.nextElementSibling
      );
      this.parentElement.parentElement.parentElement.removeChild(
        this.parentElement.parentElement
      );
      deleteEditVisibility();
      setTimeout(function () {
        alert(`Student ${studTempId} deleted succesfully`);
      }, 500);
    } else {
      setTimeout(function () {
        alert(`Student ${studTempId} deleted unchanged`);
      }, 500);
    }
  }

  DeleteButtonVar.addEventListener("click", deleteTheRow);

  // EDIT popup for dynamic

  var editButonSelector1 = document.getElementById(
    "editTableCell" + studentCount
  );

  function displayEditPopup() {
    var TempEditId = this.id.split("-")[1];
    prompt(`Edit Student ${TempEditId} details`);
  }
  editButonSelector1.addEventListener("click", displayEditPopup);

  // --------------------------------------------------------------------------
  rowCount = rowCount + 2;
  studentCount = studentCount + 1;
}

// ---------------------------------------------------------------------------

// checkbox checked & unchecked behaviour For Static
var listAllBoxes = document.querySelectorAll("#myTable input[type='checkbox']");

listAllBoxes.forEach((obj) => {
  obj.addEventListener("change", function () {
    var currentRow = this.parentElement.parentElement;
    if (this.checked) {
      currentRow.style.backgroundColor = "#fdfd01";
      currentRow.children[8].children[0].classList.remove("hidden");
      currentRow.children[9].children[0].classList.remove("hidden");
      deleteEditVisibility();
    } else {
      currentRow.style.backgroundColor = "#ffffff";
      currentRow.children[8].children[0].classList.add("hidden");
      currentRow.children[9].children[0].classList.add("hidden");
      deleteEditVisibility();
    }
  });
});

// Delete functionality For Staic

var DeleteButtonFunc = document.querySelectorAll(".deleteTableCell");

function DeleteTableRow() {
  var studTempId = this.id.split("-")[1];
  const confirmationMessage = `Do you want to delete Student ${studTempId} Details?`;
  if (confirm(confirmationMessage)) {
    this.parentElement.parentElement.parentElement.removeChild(
      this.parentElement.parentElement.nextElementSibling
    );
    this.parentElement.parentElement.parentElement.removeChild(
      this.parentElement.parentElement
    );
    rowCount = rowCount - 2;
    deleteEditVisibility();
    setTimeout(function () {
      alert(`Student ${studTempId} deleted succesfully`);
    }, 500);
  } else {
    setTimeout(function () {
      alert(`Student ${studTempId} deleted unchanged`);
    }, 500);
  }
}

DeleteButtonFunc.forEach((obj) => {
  obj.addEventListener("click", DeleteTableRow);
});

// Edit Popup For Static

var editButonSelector = document.querySelectorAll(".editButtonTable");

function displayEditPopup() {
  var TempEditId = this.id.split("-")[1];
  prompt(`Edit Student ${TempEditId} details`);
}

editButonSelector.forEach((obj) => {
  obj.addEventListener("click", displayEditPopup);
});
