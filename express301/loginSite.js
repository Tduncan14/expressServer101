const path = require('path');

const express = require('express');
const app = express();

const helmet = require('helmet');

const cookieParser = require('cookie-parser');

app.use(helmet());

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use((req,res,next) =>{
if(req.query.msg ==='fail'){
    res.locals.msg ="Sorry, This username and password combinations does not work"
}
 else{
     res.locals.msg =``
 }
    // send me on to the next piece of middleware

    next();
})

app.get('/',(req,res,next) =>{
    res.send("Sanity Check");
});

app.get('/login',(req,res,next) =>{
// the req object has a query property in express
 // req.query is an object, with a property of every key in the query string
 // the query string is where you put insercure data
  //console.log(req.query);
    res.render('login');
})

app.post('/process_login',(req,res,next) =>{
    //req.body is made by urlencoded,which parses the http message for sent data
    const password = req.body.password;
    const username = req.body.username;
// the the db to see if user credentials are valid
// if they are  valid  send it to the welcome page
// save it with a cookie or a session

    if(password === "x"){
        // res.cooke takes 2 args;
        // 1 it takes the name of the cookie/
        // 2. the value it set it to
        res.cookie('username',username);
        //res.redirect takes one arg to where to send the bowser

        res.redirect('/welcome')
    }
     else{
         // the question mark is a special character in the url
         res.redirect('/login?msg=fail&test=hello')
     }
   // res.json(req.body);
})

app.get('/welcome',(req,res,next) =>{
   // req.cookies object will have a property for every named cookie 
   // that has been set.

    res.render('welcome',{
        username:req.cookies.username
    })
})

app.get('/logout',(req,res,next) =>{
    // res takes one arg. equals the cookie to clear out name
    res.clearCookie('username');
    res.redirect('/login')
})

app.listen(3000);