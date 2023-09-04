const mongoose = require('mongoose');

const dbConfig ='mongodb+srv://doug123:DouglasJoseph1234@cluster0.zu3utl5.mongodb.net/annotations?retryWrites=true&w=majority'

const connection = mongoose.connect(dbConfig, {
useNewUrlParser: true,
useUnifiedTopology: true
});

module.exports = connection; 