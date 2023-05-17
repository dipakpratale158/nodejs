console.log("dipak")
const calculateProduct = (num1, num2) => num1 * num2;
const result = calculateProduct(5, 10);
console.log(result);
const person ={
    name:"max",
    age:29,
    // greet:()=>{
    //     console.log("hi i am "+ this.name );

    // }
    //withoute colon
    greet(){
                console.log("hi i am "+ this.name );

    }
}
person.greet()