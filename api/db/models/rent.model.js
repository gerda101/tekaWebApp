const mongoose = require('mongoose');

const RentSchema = new mongoose.Schema({
    customer: {
        type: String,
        required: true,
    },
    media: {
        type: String,
        required: true,
    },
    rentDate: {
        type: Date,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true
    },
})

const Rent = mongoose.model('Rent', RentSchema);

module.exports = {Rent};