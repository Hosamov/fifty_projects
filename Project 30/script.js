const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = 'We Love Programming!';
let index = 1;
let speed = 300 / speedEl.value; //value of input element

writeText();

function writeText() {
  textEl.innerText = text.slice(0, index); //check write text from pos 0 to index

  index++;

  if(index > text.length) {
    index = 1; //back to index 1
  }

  setTimeout(writeText, speed); //print next letter at speed interval
}

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value);
