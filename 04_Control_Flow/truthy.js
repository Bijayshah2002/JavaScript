const userEmail="bijayShah@gmail.com"
//empty string=>false
//empty array=>true
if(userEmail){
    console.log("got the user email")
}
else{
    console.log("dont have user email")
}
/*
    falsy values 
      0,-0,BigInt 0n,"",null,undefined,undefined,Nan
     
    truthy  values
      "0",'false'," ",[],{}, function(){

      }
      */
 
      const arr=[]
      if(arr.length===0){
        console.log("array is empty")
      }
      const obj={}
      if(Object.keys(obj).length===0){
        console.log("object is empty")
      }
 
       
//Nullish coalescing operators(??): null undefined
// this method is specially made for null and undefined dataTypes
let val1;
val1=5 ?? 10
console.log(val1)
val1=null??10
console.log(val1)
val1=undefined ?? 15
console.log(val1)
      

// terniary operators
// condition ? true : false  
const iceTeaPrice=100
iceTeaPrice<=80 ? console.log("less than 80") : console.log("graeter than 80")

if(1!=="1"){
    console.log(true)
}