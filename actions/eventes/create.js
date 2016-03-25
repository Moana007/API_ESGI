module.exports = function(server){
  return function(req, res, next){
    var Evente = server.models.Evente;
    var User = server.models.User;

    var evente  = new Evente(req.body);
    evente.userID = req.auth.userId;

    evente.date = new Date(evente.date).getTime();

    evente.save(function(err, data){
      if(err) {
        return res.status(500).send(err);
      }


      User.findById(req.auth.userId, function(err, user){
          if (err)
            return res.status(500).send(err);

          //user.eventes.push(data._id);
          user.save(function(err, instance){
            if (err)
              return res.status(500).send(err);
            res.send(data);
          });

      });

    });
  };
};

// module.exports = function(server){
//   return function(req, res, next){
//     var Evente = server.models.Evente;
//     var User = server.models.User;
//     var Category = server.models.Category;
//     var category;
//     var evente  = new Evente(req.body);
//     evente.userID = req.auth.userId;
//     categoryBody  = req.body.category.toLowerCase();

//     Category.findOne('label: categoryBody', function(err, reponse){
//         if (err)
//           return res.status(500).send(err);
//          else if(reponse===null){
//             category = new Category({label:categoryBody});
//             category.save(function(err, data){
//               if(err)
//                 return res.status(500).send(err);
//               evente.categoryID = data._id;
//               console.log('category ajouté');
//             });
//         }
//         else if (!reponse===null){
//             evente.categoryID = reponse._id;
//             console.log('category deja existante');
//         }
//       });


//     evente.save(function(err, data){
//       if(err) {
//         return res.status(500).send(err);
//       }


//       User.findById(req.auth.userId, function(err, user){
//           if (err)
//             return res.status(500).send(err);

//           user.eventes.push(data._id);
//           user.save(function(err, instance){
//             if (err)
//               return res.status(500).send(err);
//             res.send(data);
//           });
//       });
//     });
//   };
// };