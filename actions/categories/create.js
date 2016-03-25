module.exports = function(server){
  return function(req, res, next){
    var Category = server.models.Category;
    //var User = server.models.User;

    var category  = new Category(req.body);

    category.save(function(err, data){
      if(err) {
        return res.status(500).send(err);
      }

      res.send({
      	state : 'creat_categorie',
      	category : data
      });
    });
  };
};