const jsonServer = require('json-server');

module.exports = function startJsonServer() {
  const server = jsonServer.create();
  const router = jsonServer.router('db.json');
  const middlewares = jsonServer.defaults();

  server.use(middlewares);
  server.use(router);
  
  const rewriteRules = {
    '/api/*': '/$1'
  };
  server.use(jsonServer.rewriter(rewriteRules));
  const port = 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}.`);
});
};
