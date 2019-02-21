
// http module core
const http = require('http');

//fs = file system module it is a core module node
//fs gives node to this computer's file system.
const fs = require('fs');


//the http module has a createServer method
// takes 1 argrument which is a function
// which is a callback that has 2 arguments: req,res

const server=http.createServer((req,res)=>{

    console.log(req.url)

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
     const homePageHTML = fs.readFileSync('node.html');
    // lets you the listening for the request
    res.write(homePageHTML);
    res.end();
   }
   else if(req.url === "/node.png"){

    console.log('is it working');
    res.writeHead(200,{'content-type':'image/png'});
    const image = fs.readFileSync('node.png')
    res.write(image)
    res.end();
   }
   else{
       res.writeHead(404,{'Content-Type':'text/html'});
       res.write(`<h4>Sorry this isn't the page you looking for</h4> `)
       res.end();
   }


});

// create server returns an object with a listen method
// which a port to listten to http traffic on


server.listen(3000,()=>{
  console.log("keep moving forward Treek");
})