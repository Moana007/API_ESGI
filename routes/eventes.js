var router = require('express').Router();
var bodyparser = require('body-parser').json();

module.exports = function(server){
  router.get('/',
    //server.middlewares.cache.get,
    server.actions.eventes.get
  );

  router.get('/:id',
    server.actions.eventes.show
  );

  router.post('/',
    server.middlewares.ensureAuthenticated,
    //server.middlewares.cache.del('/eventes'),
    server.middlewares.bodyparser,
    server.middlewares.ensureBodyFields('name'),
    server.actions.eventes.create
  );

  router.put('/:id',
    //server.middlewares.cache.del('/eventes'),
    server.middlewares.bodyparser,
    server.actions.eventes.update);

  router.delete('/:name',
    //server.middlewares.cache.del('/eventes'),
    server.actions.eventes.remove);

  return router;
};
