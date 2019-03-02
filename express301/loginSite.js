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
});

// in a route, anytime something has : infront it is a wildcard
//wildcard, will match anything in that slot
app.param('id',(req,res,next,id) =>{
     console.log("params called :",id); 
     // if id has something to do with stories...
     // if id has something to do with a blog
     next();
})

// in a route, anytime something has a : in front it is a wild card
// a wildcard will match anything in that slot
app.get('/story/:id',(req,res) =>{
   // the req.parms object always exist
   // it will have a property for each wild card inn the route
   res.send(`<h1> Story ${req.params.id} </h1>`)
  // res.send(`<h1> story 1 </h1>`)
});

// will never run because req,res works only when it finds the first route that muchs
//app.get('/story/:link',(req,res) =>{

 //   res.send(`<h1> stort ${req.params.storyId} - ${req.params.link}`)
//})


//app.get('/story/1',(req,res) =>{
  //  res.send('<h1> hello </h1>')
//})

//app.get('/story/2',(req,res) =>{
  //  res.send('<h1> hello story2 </h1>')
//})

//app.get('/story/3',(req,res) =>{
  //  res.send('<h1> hello story3 </h3>')
//})

app.get('/statement',(req,res) =>{ 
    
// This will render the statement in the browser which we dont want
// app has a download method that takes 2 args:
// 1 is the the file name
// What you want the file name to download as

// this allows you to download the file
// download is allowing you to set the headers

// content-disposition(name)attachment, with the fiename to the 2nd arg
res.download(path.join(__dirname,'userStatements/statement.png'),'yourStatement.png');

 //res.sendFile(path.join(__dirname,'userStatements/statement.png'))

})

app.get('/logout',(req,res,next) =>{
    // res takes one arg. equals the cookie to clear out name
    res.clearCookie('username');
    res.redirect('/login')
})

app.listen(3000);