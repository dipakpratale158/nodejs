
const express=require("express")

const app=express()

app.use((req,res,next)=>{
  console.log("in a middlelewherer!")
next() //allows the request to continew to the next middlewhereline 
})   //use allow to add new middlewhere function. 
//passing function as a argument 

app.use((req,res,next)=>{
  console.log("in  a next  middlelewherer!")
  res.send('<h1>hellow from express</h1>')  //insted of setheader, write

})  
app.listen(3000)

