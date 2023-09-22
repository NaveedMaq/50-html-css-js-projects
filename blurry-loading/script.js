const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;
let interval = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) clearInterval(interval);

  loadText.textContent = `${load}%`;
  loadText.style.opacity = 1 - load / 100;
  const blur = 30 - (3 * load) / 10;
  bg.style.filter = `blur(${blur}px)`;
}
