const express = require('express');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const key = require('./keys');

const app = express();

// set up view engine
app.set('view engine', 'ejs');

// connect to mongodb
mongoose.connect(key.mongodb.dbURI, { useNewUrlParser: true}, () => {
    console.log('Connected to mongodb');
});

// set up routes
app.use('/auth', authRoutes);

// create home route
app.get('/', (req, res) => {
    res.render('home');
})

app.listen(3000, () => {
    console.log('app now listening for request on port 3000');
})