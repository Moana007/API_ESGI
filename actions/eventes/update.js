module.exports = function(server) {
  return function(req, res, next) {
    var Evente = server.models.Evente;
    var id = req.params.id;

    Evente.findByIdAndUpdate(id, { $set: req.body}, function (err, evente) {
      if (err)
        return res.status(500).send(err);
      res.send(evente);
    });
  };
};
