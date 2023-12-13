const express = require('express');
const app = express();

//dotenv
require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.j5xwj6p.mongodb.net/ubola');

mongoose.connection.once('open', ()=> {
    console.log('mongoose conntected');
});

mongoose.connection.on('error', ()=> {
    console.log("Mongoose connection failed " + error);
});

// // api's
// app.use('/', (req, res)=> {
//     res.send('Home page');
// })

//routes
const userRoute = require('./route/UserRoute');
app.use('/api', userRoute);

// Server
app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on ${process.env.PORT}`);
});
