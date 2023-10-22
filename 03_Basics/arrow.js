// const user={
//     name:"bijay shah",
//     price:999,
//     welcomeMessage:function(){
//        console.log(user.name+", welcome to website")
//        console.log(this)   
//     }
// }
// console.log(this) // returns only {}
// // user.welcomeMessage()
// // user.name="Virat kohli"
// // user.welcomeMessage()

function check(){
    const user="bijay"
    console.log("in check function")
        console.log(this.user)// returns undefined
    console.log(this) // returns the complete information
    console.log(this.price)// undefined
}
check()

const check2=()=>{
   const user="bijay shah"
   console.log("in check2 function")
    console.log(this.user)// returns undefined
    console.log(this) // only returns {}
        console.log(this.price)// undefined

}
check2()

// in brief 
// in arrow this returns only empty paranthesis {} refering to an object
// but in function this returns the complete information about the entire functions


// core discussion about arrow

const addtwo =(num1,num2) =>{
    return num1+num2
}
console.log(addtwo(1,2))

// advance technique
const addtwo1 =(num1,num2) => (num1+num2)// implicit return
console.log(addtwo1(2,2))

// object return
const addtwo2 =(num1,num2) => ({user:"bijay"})// implicit return
console.log(addtwo2(2,2))

// means arrow are written in this way
// ()=>{}
// ()=>()
