const mongoose = require('mongoose');

const RentSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Customer'
    },
    media: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Media'
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
        //enum: ['ongoing', 'overdue', 'returned'],
        required: true
    },
})

const Rent = mongoose.model('Rent', RentSchema);

module.exports = {Rent};