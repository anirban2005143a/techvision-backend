const express = require("express");
const router = express.Router();
const sendmail = require('../utiles/sendmail')
require('dotenv').config();

router.post('/sendmail' , async(req , res)=>{
    const {content  , subject , usermail} = req.body
    const result = await sendmail(usermail , subject , content)
    console.log(result)
    if(result){
        return res.status(200).json({result})
    }else{
        return res.status(500).json({result})
    }
})

module.exports = router;