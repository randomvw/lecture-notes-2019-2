const express = require('express'); // createApplication

const app = express();

app.get('/', (request, response) => {
  console.log(request.query); // { say: 'hello' }
  response.status(418).send(`
    <h1>Welcome to my first express server. ${request.query.test} ${request.query.page}</h1>
    <a href="/puppies">Puppies</a>
    <a href="/kitties">Kitties</a>
  `);
});

app.post('/', (request, response) => {
  response.send('Got a POST request');
});

app.get('/kitties', (request, response) => {
  response.send('Cute kitties');
});

app.get('/puppies', (request, response) => {
  response.send('Cute puppies');
});

// Query parameters
app.get('/add', (request, response) => {
  let a = Number.parseInt(request.query.a);
  let b = Number.parseInt(request.query.b);
  response.send((a + b).toString());
  // response.status(200).send(`${a + b}`);
  // response.send(200, a + b);
  // response.send(`${a + b}`);
  // response.send(200, a + b);
});

// Request parameters
app.get('/users/:user/:email', (request, response) => {
  let { user, email } = request.params; // { user: "robinsonaaron", email: "aaronlrobinson@gmail.com" }
  response.send(user + " " + email);
});

app.get('/multiply', (request, response) => {
  let { a = 1, b = 1, c = 1 } = request.query; // default the query parameters to 1
  a = Number.parseInt(a);
  b = Number.parseInt(b);
  c = Number.parseInt(c);
  response.status(200).send((a * b * c).toString());
})

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
