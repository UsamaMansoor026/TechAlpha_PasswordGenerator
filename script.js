const passwordOutput = document.getElementById("pass_gen");
const generateButton = document.getElementById("generate_btn");
const clearButton = document.getElementById("clear_btn");

let totalLength = 10;
let capitalAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let specialChars = "!@#$%^&*()+-./?{}[]";

const totalChars = capitalAlphabet + numbers + specialChars + lowerAlphabet;

generateButton.addEventListener("click", () => {
  let generatedPassword = "";
  generatedPassword +=
    capitalAlphabet[Math.floor(Math.random() * capitalAlphabet.length)];
  generatedPassword +=
    specialChars[Math.floor(Math.random() * specialChars.length)];
  generatedPassword +=
    lowerAlphabet[Math.floor(Math.random() * lowerAlphabet.length)];
  generatedPassword += numbers[Math.floor(Math.random() * numbers.length)];

  while (totalLength > generatedPassword.length) {
    generatedPassword +=
      totalChars[Math.floor(Math.random() * totalChars.length)];
  }

  passwordOutput.value = generatedPassword;
});

clearButton.addEventListener("click", () => {
  passwordOutput.value = "";
});
