const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach((sound) => {
  const btn = document.createElement('button');
  btn.classList.add('btn');

  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopSounds(sounds);
    document.getElementById(sound).play();
  });

  document.getElementById('buttons').appendChild(btn);
});

function stopSounds(sounds) {
  sounds.forEach((sound) => {
    const soundEl = document.getElementById(sound);
    soundEl.pause();
    soundEl.currentTime = 0;
  });
}
