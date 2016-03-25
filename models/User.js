module.exports = function(server){
  var UserSchema = server.mongoose.Schema({
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true,
      select: false
    },
    activated: {
      type: Boolean,
      default: false
    },
    firstName: {
      type: String,
      default: 'foo'
    },
    lastName: {
      type: String,
      default: 'bar'
    },
    eventes: [{
      type: server.mongoose.Schema.Types.ObjectId,
      ref:'Evente'
    }]
  });

  UserSchema.plugin(require('mongoose-timestamp'));
  return server.mongoose.model('User', UserSchema);
};
