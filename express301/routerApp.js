//express.Router();
const express = require('express');
const helmet = require('helmet');
const path = require('path');


const app = express();


// first piece of a middleware
app.use(helmet());

// express.json and urlencoded makes up the req.body
app.use(express.json());
// more middleware
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));


const router = require('./theRouter');
const userRouter = require('./userRouter');
// to use the middle and router through out the application


app.use('/',router);
app.use('/user',userRouter);

app.listen(3000);



