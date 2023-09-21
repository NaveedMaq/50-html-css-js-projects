const progressEl = document.getElementById('progress');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

nextBtn.addEventListener('click', () => {
  if (currentActive === circles.length) return;
  currentActive++;
  update();
});

prevBtn.addEventListener('click', () => {
  if (currentActive === 1) return;
  currentActive--;
  update();
});

function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');
  const progessPercentage = ((actives.length - 1) / (circles.length - 1)) * 100;
  progressEl.style.width = `${progessPercentage}%`;

  if (currentActive === 1) {
    prevBtn.disabled = true;
  } else if (currentActive === circles.length) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
}
