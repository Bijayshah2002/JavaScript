


let myFunction = function(){
    console.log("B")
    console.log("I")
    console.log("J")
    console.log("A")
    console.log("Y")
}
myFunction()


function myFunction2(){  // another method to define the function
    console.log("B")
    console.log("I")
    console.log("J")
    console.log("A")
    console.log("Y")
}
myFunction2()
// sum of two number

function sum(num1,num2){// parameters
    console.log('the sum is ', (num1+num2))
}
sum(1,2)// arguments

let sum2=function(num1,num2){
    console.log('the sum is ', (num1+num2))
    return num1+num2
}
let result=sum2(1,4)
console.log('Result :',result)

// some examples
function loginUserMessage( username){
    if(username===undefined){
        console.log("please enter the username")
          return;
          
    }
    else if(typeof username== 'string'){
        return  username +" just logged by "
    }
    else
    {
        return "enter the name of the person"
    }
}
console.log(loginUserMessage("bijay shah"))
console.log(loginUserMessage(true));

function user2(userName="bijay"){// concept of default values
return "hello "+userName
}
console.log(user2())// always returns bijay
console.log(user2("boss"))// override the value
