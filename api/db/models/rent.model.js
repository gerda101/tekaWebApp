const mongoose = require('mongoose');

const {Media} = require('./media.model');
const {Customer} = require('./customer.model');

/*
const RentSchema = new mongoose.Schema({
    customer: {
        type: Customer.name,
        required: true
    },
    media: {
        type: Media.name,
        required: true
    },
    rentDate: {
        type: Date,
        default: Date.now(),
        required: true
    },
    dueDate: {
        type: Date,
        min: Date.now(),
        required: true
    },
    status: {
        type: String,
        enum: ['in progress', 'overdue', 'returned'],
        required: true
    },
    _rentId:{
        type: mongoose.Types.ObjectId,
        required: true
    }
})

const Rent = mongoose.model('Rent', RentSchema);

module.exports = {Rent};*/