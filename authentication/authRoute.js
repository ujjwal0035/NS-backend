const router = require('express').Router();



router.get('/register',(req, res) =>{
    res.status(200).json({success: "Success"});
})


module.exports = router;