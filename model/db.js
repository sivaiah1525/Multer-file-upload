'use strict';

const mongoose = require('mongoose');

const DB_URI = 'mongodb://localhost:27017/multer';

const connectToDb = async () => {
    try {
        await mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log(' database successfully  connected');
    } catch (error) {
        console.log('database connected faild');
    }
}

connectToDb();

const db = mongoose.connection;

module.exports = db;