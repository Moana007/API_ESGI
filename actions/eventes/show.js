module.exports = function(server){
  return function(req, res, next){
    var Evente = server.models.Evente;
    var id = req.params.id;

    Evente.findById(id, function(err, data){
      if (err)
        return res.status(500).send(err);

      res.send({
        state : 'show_user',
        user : data
      });
      
    });
  };
};
