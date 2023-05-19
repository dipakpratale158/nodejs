
const path=require('path')
const express = require('express');
const router = express.Router()
const rootdir=require("../util/path")


router.get('/',(req,res,next)=>{  //get exact path 
    console.log("in  a next  middlelewherer!")
    res.sendFile(path.join(rootdir,'View','shop.html'))  //insted of setheader, write
  
  })
  

module.exports=router

