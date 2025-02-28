const mongoose = require('mongoose');
const { isEmail } = require('validator');

const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true, // Ensure email uniqueness
        lowercase: true, // Store email in lowercase
        validate: [isEmail, "Valid email is required"], // Validate email format
    },
    message: {
        type: String,
        required: [true, "Message is required"],
    }
});

const Message = mongoose.model('message', messageSchema);

module.exports = Message;