module.exports = function(server){
    var EventeSchema = server.mongoose.Schema({
        titre: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        lieu: {
            type: String,
            required: true
        },
        nbMaxParticipants: {
            type: Number,
            required: true,
            default:10
        },
        categoryID: {
            type: server.mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            required: false
        },
        organizerID: {
            type: server.mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: false
        },
        listParticipantsID: [{
            type: server.mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: false
        }]
    });

    EventeSchema.plugin(require('mongoose-timestamp'));
    return server.mongoose.model('Evente', EventeSchema);
};