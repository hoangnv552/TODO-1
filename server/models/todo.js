var mongoose = require('mongoose');

var TodoSchema = mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    completed: {
        type: Boolean,
        default: false
    }
});

mongoose.model('Todo', TodoSchema);