const path = require('path');
const crypto = require('crypto')
const User = require('../models/User');
const nodemailer = require('nodemailer');
const {generateToken, generateEmailToken} = require('../utils/generateToken');
const generateApiKey = require('../utils/generateApiKey');
const { cookieLife } = require('../config/constants.js');
const { validate } = require('deep-email-validator');

const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { username: '', email: '', password: '' };

    if (err.message === 'Invalid email') {
        errors.email = 'Email is not registered';
    }

    if (err.message === 'Invalid password') {
        errors.password = 'Password is incorrect';
    }

    if (err.code === 11000) {
        errors.email = 'Email is already registered';
        return errors;
    }

    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
}

async function sendConfirmationEmail(userEmail, token) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'deeptapod.ai@gmail.com', // your email
            pass: 'xbwi brni lfnz wtve' // application password
        }
    });

    let mailOptions = {
        from: 'deeptapod.ai@gmail.com', // your email
        to: userEmail,
        subject: 'DeeptapodAi confirmation',
        html: `
                  <h1>Email Confirmation</h1>
                  <p>Please click the link below to confirm your email address:</p>
                  <a href="http://localhost:${process.env.PORT}/api/view/${token}">Confirm Email</a>
              `, 
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports.signupGet = (req, res) => {
    res.render('signup');
}

module.exports.signupPost = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const apiKey = await generateApiKey();
        let user = await User.create({ username, email, password, apiKey });
        const token = generateToken(user._id);
        const emailToken = generateEmailToken(user._id.toString());
        await sendConfirmationEmail(email, emailToken);
        res.cookie('_id', user._id, { httpOnly: true, maxAge: cookieLife });
        res.cookie('token', crypto.hash('sha256', emailToken), { httpOnly: true, maxAge: cookieLife });
        res.cookie('jwt', token, { httpOnly: true, maxAge: cookieLife });
        res.status(201).json({ user: user._id });
    }
    catch(err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
}

module.exports.signinGet = (req, res) => {
    res.render('signin');
}

module.exports.signinPost = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);
        const token = generateToken(user._id);
        if (Boolean(user.isEmailConfirmed)){
            res.cookie('jwt', token, { httpOnly: true, maxAge: cookieLife });
            res.status(200).json({ user: user._id });
        }
        else{
            res.status(401).json({ message: 'Please Confirm with email'})
        }
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
}

module.exports.confirmationGet = (req, res) => {
    res.render('confirmation');
}

module.exports.signoutGet = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 });
    res.redirect('/');
}

