const express = require('express');
const router = express.Router()



router.get('/addproduct' ,(req,res,next)=>{
  console.log("in another middlelewherer!")
  res.send('<form action="/admin/addproduct" method="POST"> <input type="text" name="name" placeholder="Product Name"> <input type="text" name="size" placeholder="Product Size"> <button type="submit">Add Product</button> </form>')
})
//install body-parser
router.post('/addproduct',(req,res,next)=>{ //same paath name but methods are diffrent 
  console.log(req.body)
  res.redirect("/")
})

module.exports=router




