var mongoose = require('mongoose');

module.exports = function(server) {
  server.mongoose =  mongoose.connect(server.settings.db.mongo);

  server.models = {
    Evente: require('./Evente')(server),
    User: require('./User')(server),
    Token: require('./Token')(server),
    Category: require('./Category')(server)
  };
};
