const mongoose = require('mongoose');

const AVALIABILTY =["avaliable", "unavaliable"];

const MediaSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    mediaType: {
        type: String,
        enum: ['DVD', 'VHS'],
        required: true,
    },
    duration: {
        type: Number,
        required: true,
        minValue: 1,
    },
    mediaStatus: {
        type: String,
        enum: AVALIABILTY,
        required: true,
    },
})

const Media = mongoose.model('Media', MediaSchema);

module.exports = {Media};