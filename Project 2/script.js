const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle'); //import as a node list

let currentActive = 1;

// ensure user can't select greater than position 4/last position
next.addEventListener('click', () => {
  currentActive++;
  if(currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

// ensure user can't select below position 1
prev.addEventListener('click', () => {
  currentActive--;
  if(currentActive < 1) {
    currentActive = 1;
  }

  update();
});

function update() {
  circles.forEach((circle, index) => {
    if(index < currentActive) {
      circle.classList.add('active'); //add active class when next button pressed
    } else {
      circle.classList.remove('active'); //remove active class when prev button pressed
    }
  })

  const actives = document.querySelectorAll('.active');

  progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%'; //code for blue/fill line

  if(currentActive === 1) {
    prev.disabled = true;
  } else if(currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
