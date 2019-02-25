const path = require('path');

const express = require('express');
const app = express();

const helmet = require('helmet');

app.use(helmet());

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res,next) =>{
    res.send("Sanity Check");
});

app.get('/login',(req,res,next) =>{
    res.render('login');
})

app.post('/process_login',(req,res,next) =>{
    //req.body is made by urlencoded,which parses the http message for sent data
    const password = req.body.password;
    const username = req.body.username;
// the the db to see if user credentials are valid
// if they are  valid  send it to the welcome page
// save it with a cookie or a session

    
    res.json(req.body);
})

app.listen(3000);