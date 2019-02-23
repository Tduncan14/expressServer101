const express = require('express')

const app = express();


// the use method is how you use majority of the middeware and use static files

// uses takes one arg  which is the middleware you want to run

app.use(express.static('public'));

//
app.use(express.static('node_modules'));


app.listen(3000)

console.log('3000 and keep movng forward treek');