const fs=require("fs")
const path=require("path")

const requesthandeler=(req,res)=>{
const url=req.url;
const method=req.method;
const body=[];
if(url==="/"){
fs.readFile("message.txt",{encoding:"utf-8"},(err,data)=>{
  if(err){
console.log(err)
  }
  console.log(data)
  res.write("<html>")
  res.write("<head><title>enter message</title></head>")
  res.write("<head><title>enter message</title></head>")
res.write(`<body>${data}</body>`)
res.write(`<body><form action="/message" method="post"><input type="text" name="message" > </form></body>`)
res.write("</html>")
return res.end()
})

} else if(url === "/message" && method === "post"){
  req.on("dta",(chunk)=>{
    body.push(chunk)
  })

  return req.on("end",()=>{
    const parsebody=Buffer.concat(body).toString()
    console.log(parsebody)
    const message=parsebody.split("=")[1]
    fs.writeFile("message.txt", message, (err)=>{
      if(err){
        console.log(err)
        
      }
      
  console.log("hu")
  res.statusCode=302
  res.setHeader("location","/")
  return res.end()



    })
  })
}


else{
  res.setHeader("Content-Type","text/html")
  res.write("<html>")
  res.write("<head><title>my first pagre</title></head>")
res.write("<body><h1>hellow dipak nodejs</h1></body>")
res.write("</html>")
res.end()

}
}


module.exports=requesthandeler