const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer(
  (request, response) => {
    console.log('Received a request:', request.url);
    if (request.url === '/favicon.ico') {
      // Read the favicon file
      const faviconPath = path.join(__dirname, "public", "favicon.ico");
      fs.readFile(faviconPath, (err, data) => {
        // Write the favicon file in the response
        response.write(data);
        response.end();
      })
    }
    else if (request.url === "/favorite-food") {
      response.write('pizza');
      response.end();
    }
    else if (request.url === "/") {
      const indexPath = path.join(__dirname, "public", "index.html");
      fs.readFile(indexPath, { encoding: 'utf-8' }, (err, data) => {
        response.write(data);
        response.end();
      });
    }
    else {
      response.writeHead(404);
      response.end();
    }
  }
)

server.listen(3000);