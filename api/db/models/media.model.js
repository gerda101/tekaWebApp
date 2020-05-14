const mongoose = require('mongoose');

const MediaSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    mediaType: {
        type: String,
        /*enum: ["DVD", "VHS"],*/
        required: true,
    },
    duration: {
        type: Number,
        required: true,
        minValue: 1,
    },
    mediaStatus: {
        type: String,
        /*enum: ["AVALIABLE", "UNAVALIABLE"],*/
        required: true,
    },
})

const Media = mongoose.model('Media', MediaSchema);

module.exports = {Media};