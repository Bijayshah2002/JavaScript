function calculatePrice(num){
    return num
}
console.log(calculatePrice(344))


function calculatePrice1(num){
    return num
}
console.log(calculatePrice1(344,34,343))// returning first value
// to solve this problem we have rest operator i.e. ...

function calculatePrice2(...num){
    return num
}
console.log(calculatePrice2(344,34,343))// retuurns the value in array form


const user={
    username:"bijay shah",
    price:222
}
function handleObject(anyObject){
    console.log("userName: "+anyObject.username+"  price :"+anyObject.price)
}
handleObject(user)// passing objects

// passing array in functions

const arr=[1,2,3,4,5]

function arrValue(getArr){
    return getArr
}
console.log(arrValue(arr))