const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const app = express();
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const viewRoutes = require('./routes/viewRoutes');
const messageRoutes = require('./routes/messageRoutes');
const { checkUser, hasJWT } = require('./middlewares/authMiddleware');
const { checkApiKey } = require('./middlewares/textMiddleware');
const bodyParser = require('body-parser');
const textRoutes = require('./routes/textRoutes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());

dotenv.config();
const PORT = process.env.PORT || 3000;
const MONGOURL = process.env.MONGO_URL;

mongoose
    .connect(MONGOURL)
    .then(() => {
        console.log("Connected to DB");
        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}`)
        })
    })
    .catch((err) => {
        console.error(err);
    })

app.get('*', checkUser);
app.get('/', hasJWT, (req, res) => res.render('index'));
app.use('/api/support', messageRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/view', viewRoutes);
app.use('/api/text/:apiKey', checkApiKey, textRoutes);
app.use((req, res, next) => {
   res.status(404).render('notFound');
});


