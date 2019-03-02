const express = require('express');
// this  starting the routing
//
let router = express.Router();

function validateUser(req,res,next){
    res.locals.validated = true;
    console.log("validated");
    next();
}

// It will only be used for that a certain(specific)route only.
//router.use()

//validateUser is middleware that will only be added to this router(userRouter) since it was called here
// In other words theRouter.js and routerApp.js don't know about the middleware validateUser
router.use(validateUser);

router.get('/',(req,res) =>{

    res.json({
        msg:"This is the userRouter"
    })
});

module.exports = router;