module.exports = function(server) {
  return {
    create: require('./create')(server),
    get: require('./get')(server)
  };
};
