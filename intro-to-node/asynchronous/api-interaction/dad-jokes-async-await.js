const axios = require('axios');

async function getDadJoke(jokeId) {
  let url = 'https://icanhazdadjoke.com/';

  if (jokeId) {
    url += `j/${jokeId}`;
  }

  let response = await axios.get(url, { headers: { Accept: 'application/json' } });
  return response.data.joke
}

getDadJoke('18h3wcU8xAd').then(
  (joke) => { console.log(joke) }
)
