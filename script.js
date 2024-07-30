const inputElms = document.querySelectorAll(".card__input");
const submitBtn = document.getElementById("card__button");

const validateDay = (day) => {
  if (day && day > 0 && day <= 31) {
    return true;
  }
};
const validateMonth = (month) => {
  if (month && month > 0 && month <= 12) {
    return true;
  }
};
const validateYear = (year) => {
  const currentYear = new Date().getFullYear();

  if (year && year > 0 && year <= currentYear) {
    return true;
  }
};

const isDateValid = (dayElm, monthElm, yearElm) => {
  //! ---- Initialize an array to track validity of day, month, and year --- //;
  let isValid = [false, false, false];

  if (!validateDay(dayElm.value)) {
    dayElm.classList.add("card__input--error");
  } else {
    isValid[0] = true;
    dayElm.classList.remove("card__input--error");
  }

  // Check if the month is valid
  if (!validateMonth(monthElm.value)) {
    monthElm.classList.add("card__input--error");
  } else {
    isValid[1] = true;
    monthElm.classList.remove("card__input--error");
  }

  // Check if the year is valid
  if (!validateYear(yearElm.value)) {
    yearElm.classList.add("card__input--error");
  } else {
    isValid[2] = true;
    yearElm.classList.remove("card__input--error");
  }

  return isValid.every((item) => item === true);
};

const calculateAge = (year, month, day) => {
  const today = new Date();
  const birthdate = new Date(year, month - 1, day);

  let years = today.getFullYear() - birthdate.getFullYear();
  let months = today.getMonth() - birthdate.getMonth();
  let days = today.getDate() - birthdate.getDate();

  return { years, months, days };
};

const onClickHandler = () => {
  const dayElm = document.getElementById("day");
  const monthElm = document.getElementById("month");
  const yearElm = document.getElementById("year");
  const resultYearElm = document.querySelector(".card__resultValue--year");
  const resultMonthElm = document.querySelector(".card__resultValue--month");
  const resultDayElm = document.querySelector(".card__resultValue--day");

  if (!isDateValid(dayElm, monthElm, yearElm)) {
    resultYearElm.textContent = "--";
    resultMonthElm.textContent = "--";
    resultDayElm.textContent = "--";
    return;
  }

  const age = calculateAge(yearElm.value, monthElm.value, dayElm.value);

  resultYearElm.textContent = age.years;
  resultMonthElm.textContent = age.months;
  resultDayElm.textContent = age.days;
};
submitBtn.addEventListener("click", onClickHandler);
