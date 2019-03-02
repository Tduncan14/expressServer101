const express = require('express');

let router = express.Router();


// instead of app.get() but we will get the router.get
// router gives a better modules and it gives us a better overall architure to the application


router.get('/',(req,res,next) =>{
    res.json({
        msg:"Router works"
    });
});

module.exports = router;