/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const apiList = require('./dummy/apiList.cjs');
/* eslint-disable @typescript-eslint/no-var-requires */
const jsonServer = require('json-server');
//import jsonServer from 'json-server';
const server = jsonServer.create();
const router = jsonServer.router('src/jsonserver/db.json');
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
  res.jsonp(req.query);
});
server.get('/apiList', (req, res) => {
  res.send(apiList);
});

const apis = {
  ...require('./dummy/member.json')
};

apiList.forEach((x) => {
  if (apis[x.name]) {
    server[x.method](x.url, (req, res) => {
      res.send(JSON.stringify(apis[x.name]));
    });
  }
});
// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);

// Use default router
server.use(router);
server.listen(5110, () => {
  console.log('JSON Server is running "http://localhost:5110"');
});
