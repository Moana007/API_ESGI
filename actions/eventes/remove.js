module.exports = function(server) {
  return function(req, res, next) {
    var Evente = server.models.Evente;
    Evente.remove({name: req.params.name}, function(err, data){
      if (err)
        return res.status(500).send(err);

      //res.cached.send(data);
      res.send({
        state : 'remove_eventes',
        user : data
      });
    });
  };
};
