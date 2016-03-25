module.exports = function(server){
  return {
    register: require('./register')(server),
    unregister: require('./unregister')(server)
  }
}
