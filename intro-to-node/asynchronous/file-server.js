const http = require('http');
const fs = require('fs');

const server = http.createServer(
  (request, response) => {
    fs.readFile('index.html', 'utf-8', (error, data) => {
      response.write(data);
      response.end();
    })
  }
)

server.listen(3000);