// NODEJS is the langauge google made node runs on v8 engine
// Express is node and javascript is the langauge

// express is a third party module
const express = require('express');

// path is a native module in node js
const path = require('path');

// an app is the express function(createApplication inside the the express module)
// invoked and is an express application
const app = express();




//sever up static files

app.use(express.static('public'));



/// all is a method, and it takes 2 args;
// it takes  the rout and the calback function if requested

app.all('/',(req,res)=>{
   // express handles the basic headers(status code,mim-type)
  // express handles the end
// read in node html
  console.log(path.join(__dirname + '/node.html'))
  res.sendFile(path.join(__dirname +  '/node.html')); 
})

app.all('*',(req,res) =>{
  res.send("<h1> Sorry this page does not exist </h1>")
})

app.listen(3000)

console.log('the server is listening');