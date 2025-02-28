const Message = require('../models/Message.js');

module.exports.messagePost = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        console.log('Request Body:', req.body);

        const messageForm = await Message.create({ name, email, message });
        // await messageForm.save();
        res.send('Form submitted successfully!');
    } catch (error) {
        console.error('Error submitting form:', error);
        res.status(500).send('Error submitting form');
    }
  }
  