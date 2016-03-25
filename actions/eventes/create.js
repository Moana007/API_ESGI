module.exports = function(server){
  return function(req, res, next){
    var Evente = server.models.Evente;
    var User = server.models.User;

    var evente  = new Evente(req.body);
    evente.userID = req.auth.userId;
    console.log(evente.user);


    evente.save(function(err, data){
      if(err) {
        return res.status(500).send(err);
      }


      User.findById(req.auth.userId, function(err, user){
          if (err)
            return res.status(500).send(err);

          user.eventes.push(data._id);
          user.save(function(err, instance){
            if (err)
              return res.status(500).send(err);
            res.send(data);
          });

      });

    });
  };
};