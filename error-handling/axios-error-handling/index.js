const axios = require('axios');

async function drawACard() {
  try {
    const deck = await axios.get('http://doesnotexisthopefully.com')
    const card = await axios.get('http://somethingelsethatmightfail.com')
  }
  catch(error) {
    console.log(error.message);
  }
}

drawACard();