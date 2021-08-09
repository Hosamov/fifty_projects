const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

clipboardEl.addEventListener('click', () => {
  const textArea = document.createElement('textarea');
  const password = resultEl.innerText;

  if(!password) { return };

  textArea.value = password;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  textArea.remove();
  alert('Password copied to clipboard');
})

generateEl.addEventListener('click', () => {
  const length = +lengthEl.value; //convert to number from string with (+)
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = '';
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{lower}, {upper}, {number}, {symbol}]
    .filter(item => Object.values(item)[0]); //filter out anything without a value

  if(typesCount === 0) {
    return '';
  }

  for(let i = 0; i < length; i+=typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    })
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

function getRandomLower() {
  // return a random Lowercase letter (a-z) from char code:
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97); //returns string from specified sequence of UTF-16 code units
}

function getRandomUpper() {
  // return a random Uppercase letter (A-Z) from char code:
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65); //returns string from specified sequence of UTF-16 code units
}

function getRandomNumber() {
  // return a random number (0-9) from char code:
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48); //returns string from specified sequence of UTF-16 code units
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)] //generate random character from symbols string
}

console.log(getRandomSymbol());
