const fs=require("fs")
const path=require("path")
//create path module construct all operating system


const products=[]

module.exports=class product{
    constructor(t){
    this.title=t;
    }

    save(){
        //creat my path
        const p=path.join(path.dirname(process.mainModule.filename),
        'data',
        'products.json')
        fs.readFile(p,(err,filecontent)=>{
        let products=[];
        if(!err){
            products=JSON.parse(filecontent)
        }
        //append
        products.push(this)
        fs.writeFile(p,JSON.stringify(products),(err)=>{
            console.log(err)
        })//convert json and then wrin to file
        })    
    }
     static fetchAll(){
return  products
    }
}