const fs=require("fs")
const path=require("path")
//create path module construct all operating system
//helper function

const p=path.join(path.dirname(process.mainModule.filename),
    'data',
    'products.json')
const getproductformfile=(cb)=>{
    
fs.readFile(p,(err,filecontent)=>{
if(err){
  return cb([])
}
 cb(JSON.parse(filecontent))
})
}

const products=[]

module.exports=class product{
    constructor(t){
    this.title=t;
    }

    save(){
        //creat my path
        getproductformfile(products=>{
            products.push(this)
            fs.writeFile(p,JSON.stringify(products),(err)=>{
                console.log(err)
            })
        })
       
           
    }
     static fetchAll(cb){
      getproductformfile(cb)
    }
}