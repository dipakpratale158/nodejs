const path=require('path')
const express = require('express');
const router = express.Router()

const rootdir=require('../util/path')

router.get('/addproduct' ,(req,res,next)=>{
  console.log("in another middlelewherer!")
  res.sendFile(path.join(rootdir, "view", "htmlproduct.html"))
})
//install body-parser
router.post('/addproduct',(req,res,next)=>{ //same paath name but methods are diffrent 
  console.log(req.body)
  res.redirect("/")
})

module.exports=router




