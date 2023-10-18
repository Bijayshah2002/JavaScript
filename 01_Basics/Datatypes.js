/* #primitive dataTypes
7 Types.(String,Number,BigInt,boolean,null,undefined,Symbol)
*/
let names = "bijay shah"  //String
let age=32  // Number 
let BigNumber=9875398758937589n//big number that is BigInt
let Temperature=null // value is null means not zero but something which we dont know
let valueUndefined=undefined; // let variable and let variable=undefined are same
let id1=Symbol('123')// symbol type primitive dataTypes
let id2=Symbol('123')
console.log(id1==id2)//returns false because symbol defines unique.
console.table([id1,id2,age,names])
let isFat=true// boolean either true or false
// elaborating the concept of var and let
if(isFat==1){
    let names="bijay shah changed"
    console.log(names)

}
console.log(names)
var greet="hi"
if(isFat=="1"){
var greet="say hello instead"
console.log(greet)
}
console.log(greet)
const a=12

console.log(a)
  

// non primitive data types 
// 3 types (array, objects and functions)
 
let students=["bijay", "sonu", "amit"]// array are decleared in big brackets i.e. []
console.log(students[0])
  
// to define object
 
let employee = {
    empName:"rock",
    empAge:34

}
employee.empName="new rock" // changing the value of the variables in the object
console.log(employee.empName)

let myfunction=function(){
    console.log("funtion is called")
}
myfunction()
console.log(myfunction)
let caling=function(){
    console.log("hello function")

}
caling()