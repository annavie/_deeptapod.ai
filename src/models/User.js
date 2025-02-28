const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const { isEmail } = require("validator");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        validate: [isEmail, "Valid email is required"],
    },
    password: {
        type: String,
        required: [true, "Valid password is required"],
        minlength: [8, "Password must be at least 8 characters long"],
    },
    apiKey: {
        type: String,
    },
    isEmailConfirmed: {
        type: Boolean,
        default: false,
    },
});

userSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email });
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        }
        throw Error('Invalid password');
    }
    throw Error('Invalid email');
};

const User = mongoose.model('user', userSchema);

module.exports = User;
