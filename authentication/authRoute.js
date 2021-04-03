// const router = require('express').Router();



// router.get('/register',(req, res) =>{
//     res.status(200).json({success: "Success"});
// })


// module.exports = router;

const router = require('express').Router({ caseSensitive: true, strict: true }); 
const authController = require('../authentication/authController'); 
router.post('/register',authController.registerUser); 

module.exports = router;