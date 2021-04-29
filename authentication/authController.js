const authService = require('../authentication/authService'); 

async function registerUser(req,res) { 
    try{
        const data =await authService.registerUser(req.body); 

        res.status(200).json(data);
    }catch(error){
        res.status(500).json(error);
    }
    } 
    
    module.exports={ registerUser }