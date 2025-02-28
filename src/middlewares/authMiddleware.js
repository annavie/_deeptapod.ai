const jwt = require('jsonwebtoken');
const User = require('../models/User');
const dotenv = require('dotenv');
const crypto = require('crypto')
dotenv.config();

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect('/api/auth/signup');
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.redirect('/api/auth/signup');
  }
};

const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        res.locals.user = await User.findById(decodedToken.id);
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

const checkEmailToken = async (req, res, next) => {
  const token = req.params.token;
  
  const hashedToken = crypto.createHash('sha256').update(token).digest('hex');
  
  if (hashedToken === req.cookies.token) {
    const id = req.cookies._id;
    try {
      const user = await User.findById(id);
      if (user) {
        user.isEmailConfirmed = true;
        console.log('Before saving user:', user);
        
        await User.findByIdAndUpdate(id, { isEmailConfirmed: true }, { new: true, runValidators: false });
        
        console.log('After saving user:', user);
      }
      next();
    } catch (error) {
      console.error('Error finding or saving user:', error);
      res.redirect('/api/auth/signup');
    }
  } else {
    res.redirect('/api/auth/signup');
  }
};

const isEmailConfirmed = async (req, res, next) => {
  const id = req.cookies._id
  const user = await User.findById(id)
  if(Boolean(user.isEmailConfirmed)){
    next()
    }else{
      res.redirect('/api/auth/signup')
      }
}
const hasJWT = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        next()
      }
    });
  } else {
    next()
  }
};




module.exports = { requireAuth, checkUser, checkEmailToken, isEmailConfirmed , hasJWT};