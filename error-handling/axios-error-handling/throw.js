const axios = require('axios');

function handleError(error) {
  console.log(error.message);
}

async function drawACard() {
  throw new Error("Error thrown immediately");
  const deck = await axios.get('http://doesnotexisthopefully.com')
  const card = await axios.get('http://somethingelsethatmightfail.com')
}

async function drawACardTryCatch() {
  try {
    throw new Error("Error thrown immediately");
    const deck = await axios.get('http://doesnotexisthopefully.com')
    const card = await axios.get('http://somethingelsethatmightfail.com')
  }
  catch (error) {
    console.log(error.message);
  }
}

drawACard().catch(handleError);
drawACardTryCatch();