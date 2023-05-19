
const express=require("express")
const bodyParser=require("body-parser")

const app=express()
//app.use-path paths callback callbacks

const adminRout=require('./routs/admin')
const shopadmin=require('./routs/shop')
app.use(bodyParser.urlencoded({extended:false})) //config option extended:false
// app.use('/', (req,res,next)=>{
//   // res.send("<h1>this is always run</h1>")
//   next()
// })

app.use(adminRout)
  app.use(shopadmin)


  app.use((req,res,next)=>{
    res.status(404).send('<h1>page not found </h1>')
  })
app.listen(3000)

