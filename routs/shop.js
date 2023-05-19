

const express = require('express');
const router = express.Router()



router.get('/',(req,res,next)=>{  //get exact path 
    console.log("in  a next  middlelewherer!")
    res.send('<h1>hellow from express</h1>')  //insted of setheader, write
  
  })
  

module.exports=router

