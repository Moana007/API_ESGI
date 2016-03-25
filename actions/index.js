module.exports = function(server){
  server.actions = {
    eventes: require('./eventes')(server),
    users: require('./users')(server),
    auth : require('./auth')(server),
    categories : require('./categories')(server)
  };
};
