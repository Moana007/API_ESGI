module.exports = function(server){
  var EventeSchema = server.mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    details: String,
    dueDate: String,
    done: {
      type: Boolean,
      default: false
    },
    userID: {
      type:server.mongoose.Schema.Types.ObjectId,
      ref:'User',
      required: true
    }
  });

  EventeSchema.plugin(require('mongoose-timestamp'));

  return server.mongoose.model('Evente', EventeSchema);
};