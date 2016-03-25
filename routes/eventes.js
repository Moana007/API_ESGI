var router = require('express').Router();
var bodyparser = require('body-parser').json();

module.exports = function(server){
  //renvoi all event
  router.get('/', server.actions.eventes.get);



  //renvoi l'event choisi
  // router.get('/:id',
  //   server.actions.eventes.get
  // );

  //renvoi les events soit 'past' soit 'futur'
  router.get('/time/:time',
    server.actions.eventes.showTime
  );

  //envoi les event d'un utilisteur
  router.get('/user/:id/',
    server.actions.eventes.show
  );
  // //envoi les event orgnisé et ou je participe past ou futur
  // router.get('/me/:time',
  //   server.actions.eventes.show
  // );



  router.post('/',
    server.middlewares.ensureAuthenticated,
    server.middlewares.bodyparser,
    server.middlewares.ensureBodyFields('titre'),
    server.actions.eventes.create
  );

  router.put('/:id',
    server.middlewares.bodyparser,
    server.actions.eventes.update);

  router.delete('/:name',
    server.actions.eventes.remove);

  return router;
};
