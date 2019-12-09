const axios = require('axios');

axios.get('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } })
.then(
  (response) => {
    // console.log(response.data.joke);
  }
)

function getDadJoke(jokeId) {
  if (jokeId) {
    return axios.get('https://icanhazdadjoke.com/j/' + jokeId, { headers: { Accept: 'application/json' } }).then(
      (response) => { return response.data.joke }
    );
  }

  return axios.get('https://icanhazdadjoke.com', { headers: { Accept: 'application/json' } }).then(
    (response) => { return response.data.joke }
  );
}

getDadJoke('18h3wcU8xAd').then(
  (joke) => { console.log(joke) }
)