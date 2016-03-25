module.exports =  function(server){
  return function(req, res, next){
    var Evente = server.models.Evente;
    var query = Evente.find();

    query.exec(function(err, data){
      if(err)
        return res.status(500).send(err);
            res.send({
              state : 'get_eventes',
              user : data
            });

    });
  };
};
