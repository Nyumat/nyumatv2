// No demo, github pages doesn't allow server
// side rendering.

const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const indexFile = fs.readFileSync('./public/index.html');
const fourOhFourFile = fs.readFileSync('./public/404.html');
const cssFile = fs.readFileSync('./public/style.css');
const jsFile = fs.readFileSync('./public/index.js');


const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
      if (req.url === '/' || req.url === '/index.html') {
            res.writeHead(200, {
                  'Content-Type': 'text/html'
            });
            res.end(indexFile);
      } else if (req.url.match(/.css$/)) {
            res.writeHead(200, {
                  'Content-Type': 'text/css'
            });
            res.end(cssFile);
      } else if (req.url.match(/.js$/)) {
            res.writeHead(200, {
                  'Content-Type': 'text/javascript'
            });
            res.end(jsFile);
      } else {
            res.writeHead(404, {
                  'Content-Type': 'text/html'
            });
            res.end(fourOhFourFile);
      }
}).listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
});
