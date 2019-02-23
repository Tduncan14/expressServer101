const express = require('express');
const app = express();

// express to claim itself as two things
// express is a router
// also it  middleware that comprises a webframework

// webservers work you have a request comes in and request goes out
// middleware is the what happened in between the first req and the finally response


// A middleware function is any function that has access to the req,res,next object.

//req --- Middleware ---> response
// example the request comes in
// 2 we need to validate the user, sometimes.
// we need to store information in the db
// there is data from the use we need to parse and store it
//. then finally the respone .

function validateUser(req,res,next){
// we can get info out the req.object
// do some stuff with the db
  res.locals.validated =true;
  console.log("validated Ran");
  // allows it to move to the next piece of middleware
  next();
}

// This will run validateUser on /admin, on all methods
app.use('/admin',validateUser);

// this will run on all paths and all methods
///app.use(validateUser);

// This will run validateUser on /, only on get methods
//app.get('/',validateUser)

app.get('/',(req,res,next) =>{
    res.send("<h1> Main page, keep moving for Treek </h1>");
    console.log(res.locals.validated);
});


app.get('/admin',(req,res) =>{
    res.send('<h1> Welcome to the admin page </h1>');
    console.log(res.locals.validated);
})

app.listen(3000);

console.log('Keep moving forward Treek and listening on port 3000')