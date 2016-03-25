var router = require('express').Router();

module.exports = function(server){
  router.post('/register',
    server.middlewares.ensureAuthenticated,
    //server.middlewares.bodyparser,
    //server.middlewares.ensureBodyFields(['email', 'password']),
    server.actions.register.register
  );

  router.post('/unregister',
    server.middlewares.ensureAuthenticated,
    server.actions.register.unregister
  );

  return router;
};
