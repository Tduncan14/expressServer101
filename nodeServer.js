
// http module core
const http = require('http');


//the http module has a createServer method
// takes 1 argrument which is a function
// which is a callback that has 2 arguments: req,res

const server=http.createServer((req,res)=>{

   if(req.url === '/') {
       //the user wants the homepage,because the req object / in the url route
        // Our way of responding the requester
    // http message
    // start-line - Check
    // header
    // body
    // writeHead takes args:
    // 1.status code
    // 2. object for the mime-type

    res.writeHead(200,{'Content-Type':'text/html'});
    // res.write(');
    res.write('<h1> This is the homepage </h1>')
    // lets you the listening for the request
    res.end()
   }

   

});

// create server returns an object with a listen method
// which a port to listten to http traffic on


server.listen(3000,()=>{
  console.log("keep moving forward Treek");
})