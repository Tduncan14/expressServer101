const express = require('express');

const app = express();

// app object has a few methods;
// These are the http verbs
// are rest verbs
// get method
// delete method 
// post method
// put method

// the default for all browser are a get request
// which is the crud method 
// all means it accept any method

// take 2 args: the path and req/res call back function
// it is then made to the path of the route

// app.get();
// app.post();
// app.delete();
// app.put ();

/// looking for any http method 
/*app.all('/',(req,res) =>{
    res.send('<h1> Welcome to the home </h1>');
})
*/


app.get('/',(req,res) =>{
    console.log(req);
   res.send('<h1> Welcome to the home GET page')
});

app.post('/',(req,res) => {
  res.send('<h1> Welcome to the home POST  page </h1>')
});


app.delete('/',(req,res) =>{

});


app.put('/',(req,res) =>{

})



app.listen(3000);

console.log('the server is listening on express routing')