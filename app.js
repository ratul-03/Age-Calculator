const btn = document.querySelector('.cal_btn');
const birthday = document.querySelector("#birthday_date");
const result = document.querySelector(".result");

// Preventing default behavior of form
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
});

function calculateAge() {
  const valueBirthday = birthday.value;
  if (valueBirthday === '') {
    alert('Please enter a valid date');
  } else {
    const age = getAge(valueBirthday);
    result.innerText = `Your age is ${age}`;
  }
}

function getAge(valueBirthday) {
  const currentDate = new Date();
  const birthdayDate = new Date(valueBirthday);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
    age--;
  }

  return age;
}

btn.addEventListener("click", calculateAge);
