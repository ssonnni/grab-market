let http = require('http'); //노드 내장 모듈 불러옴
let hostname = '127.0.0.1'; //내컴퓨터 주소(localhose와 동일)
let port = 8081;

const server = http.createServer(function (req, res) {
  const path = req.url;
  const method = req.method;
  if (path === '/products') {
    if (method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      const products = JSON.stringify([
        {
          name: '농구공',
          price: 5000,
        },
      ]);
      res.end(products);
    } else if (method === 'POST') {
    }
  }
  res.end('Good Bye');
});
server.listen(port, hostname);
console.log('grab market server on!');
