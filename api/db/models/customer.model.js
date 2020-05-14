const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    phone: {
        type: Number,
        minlength: 11,
        maxlength: 12,
    },
    address: {
        type: String,
        minlength:1,
    },
})

const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = {Customer};