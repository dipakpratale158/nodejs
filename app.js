
const express=require("express")
const bodyParser=require("body-parser")

const app=express()
//app.use-path paths callback callbacks

app.use(bodyParser.urlencoded({extended:false})) //config option extended:false
// app.use('/', (req,res,next)=>{
//   // res.send("<h1>this is always run</h1>")
//   next()
// })


app.get('/addproduct' ,(req,res,next)=>{
  console.log("in another middlelewherer!")
  res.send('<form action="/product" method="POST"> <input type="text" name="name" placeholder="Product Name"> <input type="text" name="size" placeholder="Product Size"> <button type="submit">Add Product</button> </form>')
})
//install body-parser
app.use('/product',(req,res,next)=>{
  console.log(req.body)
  res.redirect("/")
})
app.use('/',(req,res,next)=>{
  console.log("in  a next  middlelewherer!")
  res.send('<h1>hellow from express</h1>')  //insted of setheader, write

})  
app.listen(3000)

