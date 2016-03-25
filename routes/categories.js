var router = require('express').Router();
var bodyparser = require('body-parser').json();

module.exports = function(server){
  router.get('/', server.actions.categories.get );

  router.post('/',
    server.middlewares.bodyparser,
    server.middlewares.ensureBodyFields('label'),
    server.actions.categories.create
  );

  return router;
};
