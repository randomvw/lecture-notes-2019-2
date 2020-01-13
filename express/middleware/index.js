const express = require('express');

const app = express();

function myFirstMiddleware (req, res, next) {
  console.log("Received a request!");
  console.log(req.url + " " + req.hostname);
  req.addedProperty = "Aaron"; // Adding a property to req will be passed to all middleware
  next();
}
// express.static is built-in middleware for serving static files
app.use(express.static('public'));
app.use(myFirstMiddleware, (req, res, next) => { next(); }, (req, res, next) => { next(); });
app.use((req, res, next) => next());

app.get('/', (req, res) => {
  console.log(req.addedProperty);
  res.send('Welcome to my Express server with middleware!');
})

const sayHelloMiddleware = (req, res, next) => { console.log('Hello route'); next(); };

app.get('/hello', sayHelloMiddleware, (req, res) => {
  console.log(req.addedProperty);
  res.send('Hello!');
});

app.listen(3000, () => console.log('Listening on port 3000'));