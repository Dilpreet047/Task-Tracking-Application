//Schema of the database
const mongoose = require('mongoose');

const dbSchema = mongoose.Schema({

    task: {
        type: String,
        required: true
    },

    date: {
        type: String,
        required: true
    },

    time: {
        type: String,
        required: true
    },

    priority: {
        type: Boolean,
        default: false
    }
})

const entry = mongoose.model('dbscheme', dbSchema);
module.exports = entry;
