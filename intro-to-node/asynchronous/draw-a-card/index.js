const axios = require('axios');

async function run() {
  // Create a brand new deck of cards
  const newDeckResponse = await axios.get('https://deckofcardsapi.com/api/deck/new/');

  // Get the ID of the new deck
  const deckId = newDeckResponse.data.deck_id;

  // Reshuffle the deck of cards
  await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`);

  // Draw a card from the deck
  const drawResponse = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
  const card = drawResponse.data.cards[0];

  // Print the suit and the value of the card
  console.log(card.value, card.suit);
}

run();