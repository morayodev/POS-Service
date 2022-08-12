const FirstName = document.querySelector("#firstName");
const LastName = document.querySelector("#lastName");
const form = document.querySelector("#signup");
const emailEl = document.querySelector("#email");
const phoneEl = document.querySelector("#phone");
const locationEl = document.querySelector("#location");
const BusinessEl = document.querySelector("#BusinessType");
const MonthlySalesEl = document.querySelector("#MonthlySales");
const RadioBtn = document.getElementsByName("radioBtn");
const CheckBoxEL = document.querySelector("#checkBoxBtn");

const isRequired = (value) => (value === "" ? false : true);
const isBetween = (length, min, max) => (length < min || length > max ? false : true);
const isEmailValid = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const showError = (input, message) => {
  // get the form-field element
  const formField = input.parentElement;
  // add the error class
  //   formField.classList.remove("success");
  formField.classList.add("error");

  // show the error message
  const error = formField.querySelector("small");
  error.textContent = message;
};

const showSuccess = (input) => {
  // get the form-field element
  const formField = input.parentElement;
  // remove the error class
  formField.classList.remove("error");
  formField.classList.add("success");

  // hide the error message
  const error = formField.querySelector("small");
  error.textContent = "";
};

const firstUserName = () => {
  let valid = false;
  const min = 3,
    max = 25;
  const first = FirstName.value.trim();
  const last = LastName.value.trim();

  if (!isRequired(first)) {
    showError(FirstName, "First Name cannot be blank.");
  } else if (!isBetween(first.length, min, max)) {
    showError(FirstName, `Name must be between ${min} and ${max} characters.`);
  } else {
    showSuccess(FirstName);
    valid = true;
  }

  if (!isRequired(last)) {
    showError(LastName, "Last Name cannot be blank.");
  } else if (!isBetween(last.length, min, max)) {
    showError(LastName, `Name must be between ${min} and ${max} characters.`);
  } else {
    showSuccess(LastName);
    valid = true;
  }
  return valid;
};

const checkEmail = () => {
  let valid = false;
  const email = emailEl.value.trim();
  if (!isRequired(email)) {
    showError(emailEl, "Email cannot be blank.");
  } else if (!isEmailValid(email)) {
    showError(emailEl, "Email is not valid.");
  } else {
    showSuccess(emailEl);
    valid = true;
  }
  return valid;
};
const phoneNum = () => {
  let valid = false;
  const phone = phoneEl.value.trim();
  if (!isRequired(phone)) {
    showError(phoneEl, "Phone Number is required.");
  } else {
    showSuccess(phoneEl);
    valid = true;
  }
  return valid;
};
const locationPicked = () => {
  let valid = false;
  const location = locationEl.value.trim();
  if (!isRequired(location)) {
    showError(locationEl, "Location is required.");
  } else {
    showSuccess(locationEl);
    valid = true;
  }
  return valid;
};
const BusinessPicked = () => {
  let valid = false;
  const Business = BusinessEl.value.trim();
  if (!isRequired(Business)) {
    showError(BusinessEl, "Business Type is required.");
  } else {
    showSuccess(BusinessEl);
    valid = true;
  }
  return valid;
};
const MonthSale = () => {
  let valid = false;
  const Month = MonthlySalesEl.value.trim();
  if (!isRequired(Month)) {
    showError(MonthlySalesEl, "Month Sale is required.");
  } else {
    showSuccess(MonthlySalesEl);
    valid = true;
  }
  return valid;
};
const RadioPicked = () => {
  let valid = false;
  for (i = 0; i < RadioBtn.length; i++) {
    if (RadioBtn[i].checked) {
      document.getElementById("msg").innerHTML = "";
      return RadioBtn;
      // document.getElementById("msg").innerHTML = "Gender: " + RadioBtn[i].value;
    } else {
      var msg = '<span style="color:red;">Pick One!</span>';
      document.getElementById("msg").innerHTML = msg;
      valid = false;
    }
  }

  return valid;
};


const Check = () => {
  let valid = false;

  if (CheckBoxEL.checked == true) {
    document.getElementById("msgCheck").innerHTML = "";
    valid = true;
  } else {
    var msg = '<span style="color:red;">Required!</span>';
    document.getElementById("msgCheck").innerHTML = msg;
    valid = false;
  }
  return valid;
};
console.log(CheckBoxEL.value, "checkBoxEL");
console.log(RadioBtn.value, "RadioBtn");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  //   let isFormValid =
  firstUserName();
  checkEmail();
  phoneNum();
  locationPicked();
  BusinessPicked();
  MonthSale();
  Check();
  RadioPicked();

  let first = FirstName.value;
  let last = LastName.value;
  let email = emailEl.value;
  let phone = phoneEl.value;
  let location = locationEl.value;
  let business = BusinessEl.value;
  let sales = MonthlySalesEl.value;
  let radio = RadioBtn.value;
  let checkB = CheckBoxEL.value;
  const details = {
    first: first,
    last: last,
    email: email,
    phone: phone,
    location: location,
    business: business,
    sales: sales,
    checkB: checkB,
  };
  if (
    firstUserName() &&
    checkEmail() &&
    phoneNum() &&
    locationPicked() &&
    BusinessPicked() &&
    MonthSale() &&
    Check() &&
    RadioPicked() &&
    Check()
  ) {
    alert("Form Sumitted");
    localStorage.setItem("Form", JSON.stringify(details));
  } else {
    alert("Not Sumitted");
  }
});
