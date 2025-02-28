const User = require('../models/User');
const dotenv = require("dotenv");
dotenv.config();

const checkApiKey = async (req, res, next) => {
  try {
    const { apiKey } = req.params;
    const user = await User.findOne({ apiKey });

    if (user) {
      next();
    } else {
      res.status(401).json({ message: 'Invalid API Key' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
  }
};

module.exports = { checkApiKey };
