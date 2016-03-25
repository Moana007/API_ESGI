module.exports = function(server){
  return function(req, res, next){
console.log('in register');
    res.send('register');
  }
};
