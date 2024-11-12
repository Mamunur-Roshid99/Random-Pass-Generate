const passwordBox = document.querySelector("#password");
const button = document.querySelector("#btn");
const copyselect = document.querySelector("#Copy");

const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%&'()*+,-./}{[]<>/-=";

const allChars = upperCase + lowerCase + number + symbol;

button.addEventListener("click", () => {
  let password = "";

  // Add at least one uppercase letter
  password += upperCase[Math.floor(Math.random() * upperCase.length)];

  // Add at least one lowercase letter
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];

  // Add at least one number
  password += number[Math.floor(Math.random() * number.length)];

  // Add at least one symbol
  password += symbol[Math.floor(Math.random() * symbol.length)];

  // Add remaining characters randomly
  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBox.value = password;
});

copyselect.addEventListener("click", () => {
  passwordBox.select();
  document.execCommand("copy"); // This message is displayed only once after copying
});
