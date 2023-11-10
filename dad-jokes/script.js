const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeEl.textContent = 'Getting Joke';
generateJoke();

async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  try {
    jokeBtn.disabled = true;
    jokeBtn.textContent = 'Getting new joke...';

    const res = await fetch('https://icanhazdadjoke.com', config);
    const data = await res.json();
    jokeEl.textContent = data.joke;
  } finally {
    jokeBtn.disabled = false;
    jokeBtn.textContent = 'Get Another Joke';
  }
}

jokeBtn.addEventListener('click', generateJoke);
