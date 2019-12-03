const http = require('http');
const fs = require('fs');

const server = http.createServer(
  (request, response) => {
    fs.writeFile('filename.txt', '', (error) => {
      if (error) {
        console.log(error);
      }

      fs.appendFile('filename.txt', 'some stuff', (error) => {
        if (error) {
          console.log(error);
        }

        //* read the file
        fs.readFile('filename.txt', 'utf-8', (error, data) => {
          response.write(data);
          response.end();
        });
      })
    })
  }
)

const port = fs.readFileSync('port.txt', 'utf-8');

server.listen(port);
