const express = require('express');
const helmet = require('helmet');
const path = require('path');
const app = express();



app.use(helmet());

app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.set('view engine', 'ejs');

app.set('views', path.join(__dirname,'views'))

function valiadateUser(req,res,next){
    //... valadited the logic
    res.locals.validated =true;
    next();
}

app.use(valiadateUser);

app.get('/about',(req,res,next) =>{
    res.render('about')
}
)

app.get('/',(req,res,next) =>{
   // the data in the second arg , is going to be appended tp res.locals
    res.render('index',{
        msg:'success',
        msg2:'keep moving forward',
        //Html that came from the template and we want to drop it into the template
       html:`<p> img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Yosemite_Sam.svg/1200px-Yosemite_Sam.svg.png"/>`
    });

})


app.listen(4000);
console.log('listening on port 4000')