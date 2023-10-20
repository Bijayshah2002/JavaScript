// // singleton
// // whenever we make using litreals we are not making singleton
  

//   // here wae are makinmg objects litera
//   Object.create // a method to create object
   
//   // another method
   
//   const myObj={
//     name:"bijay" , 
//     "full name":"bijay shah",
//     age:34 ,
//     location:"birgunj",
//     email: "bijayshah@gmail.com",
//     isLoggedIn:false,
//     lastLoginDay:["Monday","Wednesday"]
// }

// console.log(myObj.name) // easy way to use the objects

// // another way
//  console.log(myObj["name"])
//  // console.log(myObj.full name) not possible so
//  console.log(myObj["full name"])

//  // symbol
// how to use symbol as key or decleare as object
 const mySym = Symbol("myKey")

 const myObj={
    name:"bijay" , 
    "full name":"bijay shah",
    age:34 ,
    [mySym]:"myKey",
    location:"birgunj",
    email: "bijayshah@gmail.com",
    isLoggedIn:false,
    lastLoginDay:["Monday","Wednesday"]
}
console.log( myObj[mySym])
// to change the value
myObj.email="vijayshah@outlook.com"
console.log(myObj["email"])
// Object.freeze(myObj) // to make the objects freeze
myObj.email="vijayshah@hotmail.com"
console.log(myObj["email"])
console.log(myObj)

myObj.zipCode=44300 // to add data in objects
console.log(myObj)
// adding function in objects

myObj.myFunction=function(){ // adding function in objects
    console.log('hello bro, ${this.name}')
}
myObj.myFunction()
console.log(myObj.myFunction)
console.log(myObj)
myObj.myFunction2=function(){ // adding function in objects
    console.log('hello bro ',this.name)
}
myObj.myFunction2()